/**
 * Cyberpunk Synthetic UI Sound System
 * Uses the Web Audio API to generate lightweight, zero-dependency sound effects.
 */

let audioCtx: AudioContext | null = null;
let isMuted = false;

// Must be called on first user interaction (click/keydown) to unlock audio in modern browsers
export const initAudioContext = () => {
  if (typeof window === 'undefined') return;
  
  if (!audioCtx) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

export const setGlobalMute = (muted: boolean) => {
  isMuted = muted;
};

export const getGlobalMute = () => isMuted;

// A very short, high-pitched "tick" for hovering over elements
export const playHoverSound = () => {
  if (!audioCtx || isMuted || audioCtx.state === 'suspended') return;
  
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    // Start at 800Hz, quickly ramp up to 1200Hz
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.04);
    
    // Very quiet volume (0.02 max)
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  } catch (e) {
    // Ignore audio routing errors in strict environments
  }
};

// A sharp, slightly lower-pitched "blip" for clicks
export const playClickSound = () => {
  if (!audioCtx || isMuted || audioCtx.state === 'suspended') return;
  
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'triangle';
    // Start at 600Hz, ramp down to 300Hz
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
    
    // Slightly louder than hover (0.05 max)
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch (e) {
    // Ignore errors
  }
};

// A soft, low-frequency hum for hovering over large cards
export const playCardHoverSound = () => {
  if (!audioCtx || isMuted || audioCtx.state === 'suspended') return;
  
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(200, audioCtx.currentTime + 0.05);
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } catch (e) {
    // Ignore errors
  }
};

// A low-frequency descending sweep simulating a laser scanner (lasts ~2.5s)
export const playScanSound = () => {
  if (!audioCtx || isMuted || audioCtx.state === 'suspended') return;
  
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(250, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 2.5);
    
    // Low, sustained volume
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.005, audioCtx.currentTime + 0.2);
    gainNode.gain.setValueAtTime(0.005, audioCtx.currentTime + 2.3);
    gainNode.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 2.5);
    
    // Apply a lowpass filter to muffle the sawtooth harshness
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    
    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 2.5);
  } catch (e) {
    // Ignore errors
  }
};

// A quick, high-pitched two-tone chime for "Access Granted / Verified"
export const playVerifiedSound = () => {
  if (!audioCtx || isMuted || audioCtx.state === 'suspended') return;
  
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    
    // Tone 1: 880Hz (A5)
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    // Tone 2: 1318.51Hz (E6) starting at 0.1s
    osc.frequency.setValueAtTime(1318.51, audioCtx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    // Swell for Tone 1
    gainNode.gain.linearRampToValueAtTime(0.03, audioCtx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    // Swell for Tone 2
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 0.12);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch (e) {
    // Ignore errors
  }
};
