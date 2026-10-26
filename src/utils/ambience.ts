// Subtle luxury audio synthesizer using Web Audio API
// Generates a soft, warm ambient chord (analog pad sound) with gentle movement

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let oscillators: OscillatorNode[] = [];

export const toggleAmbienceSound = (isPlaying: boolean): boolean => {
  if (isPlaying) {
    // Stop sound
    if (masterGain && audioCtx) {
      masterGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.4);
      setTimeout(() => {
        oscillators.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch { /* ignore disconnect errors */ }
        });
        oscillators = [];
      }, 500);
    }
    return false;
  } else {
    // Start sound
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtx) {
        audioCtx = new AudioCtxClass();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
      masterGain.gain.setTargetAtTime(0.045, audioCtx.currentTime, 1.2); // Warm, unobtrusive volume

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, audioCtx.currentTime); // Deep warm filter

      // Pentatonic rich luxury chord: F#m9 / D#m9 warmth (130.81Hz, 164.81Hz, 196.00Hz, 246.94Hz)
      const frequencies = [130.81, 164.81, 196.00, 246.94, 329.63];

      oscillators = frequencies.map((freq) => {
        const osc = audioCtx!.createOscillator();
        const oscGain = audioCtx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx!.currentTime);

        // subtle frequency drift
        const lfo = audioCtx!.createOscillator();
        const lfoGain = audioCtx!.createGain();
        lfo.frequency.setValueAtTime(0.12 + Math.random() * 0.08, audioCtx!.currentTime);
        lfoGain.gain.setValueAtTime(1.5, audioCtx!.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.2, audioCtx!.currentTime);
        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
        return osc;
      });

      filter.connect(masterGain);
      masterGain.connect(audioCtx.destination);
      return true;
    } catch (err) {
      console.warn('AudioContext not allowed or supported', err);
      return false;
    }
  }
};
