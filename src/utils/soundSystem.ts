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
