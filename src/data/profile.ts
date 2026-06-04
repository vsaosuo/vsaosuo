export const profile = {
  name: 'Visal Saosuo',
  headline: 'Computer Engineering grad who builds things — from bare-metal firmware to web apps.',
  bio: "I recently graduated in Computer Engineering and spend most of my time at the intersection of hardware and software. I'm drawn to projects where you can see and touch the result: custom PCBs, embedded systems, and tools that solve a real problem. When I'm not soldering or debugging, I'm usually learning something new in public.",
  currentlyWorkingOn: 'Building this portfolio and a BLE-based sensor mesh for a home automation project.',
  photo: null as string | null,
  links: {
    github: 'https://github.com/vsaosuo',
    linkedin: 'https://linkedin.com/in/vsaosuo',
    email: 'through LinkedIn',
    resume: '/resume.pdf',
  },
  skills: [
    {
      category: 'Languages',
      items: ['C', 'C++', 'Python', 'TypeScript', 'VHDL', 'Bash'],
    },
    {
      category: 'Hardware & Embedded',
      items: ['STM32', 'AVR', 'FPGA (Xilinx)', 'KiCad', 'FreeRTOS', 'UART / SPI / I2C', 'BLE'],
    },
    {
      category: 'Web & Tools',
      items: ['React', 'Vite', 'Tailwind CSS', 'Git', 'GitHub Actions', 'Linux', 'Docker'],
    },
  ],
}
