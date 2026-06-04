export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    slug: 'fpga-synthesizer',
    title: 'FPGA Audio Synthesizer',
    description:
      'Real-time polyphonic synthesizer implemented in VHDL on a Xilinx Artix-7 FPGA. Supports 8-voice polyphony with configurable waveforms (sine, square, sawtooth) and a hardware MIDI interface.',
    tags: ['VHDL', 'FPGA', 'Digital Logic', 'MIDI', 'Audio DSP'],
    github: 'https://github.com/vsaosuo',
  },
  {
    slug: 'embedded-datalogger',
    title: 'Embedded Sensor Datalogger',
    description:
      'Low-power IoT datalogger built on STM32 with FreeRTOS. Samples temperature, humidity, and pressure at configurable intervals, stores to SD card in CSV, and streams over BLE to a companion mobile app.',
    tags: ['C', 'STM32', 'FreeRTOS', 'BLE', 'IoT'],
    github: 'https://github.com/vsaosuo',
  },
  {
    slug: 'portfolio',
    title: 'This Portfolio',
    description:
      'Personal portfolio site built with Vite, React 19, TypeScript, and Tailwind CSS v4. Deployed to GitHub Pages via GitHub Actions. You are looking at it.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Actions'],
    github: 'https://github.com/vsaosuo',
    live: 'https://vsaosuo.github.io',
  },
  {
    slug: 'pcb-power-supply',
    title: 'Bench Power Supply PCB',
    description:
      'Custom adjustable bench power supply (1.25 V – 30 V, 3 A) designed in KiCad. Features an LM2596 buck converter, current-limiting circuitry, and a 7-segment display for live voltage readout.',
    tags: ['KiCad', 'PCB Design', 'Power Electronics', 'Analog'],
    github: 'https://github.com/vsaosuo',
  },
]
