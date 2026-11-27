export type Part = {
  id: string
  name: string
  oem: string
  category: 'Cooling' | 'Drivetrain' | 'Suspension' | 'Exterior'
  chassis: string[]
  stock: boolean
  description: string
  specs: string[]
  icon: string
  tone: string
}

export const parts: Part[] = [
  { id: 'coolant-hose-e36', name: 'Upper Radiator Hose', oem: '11531436408', category: 'Cooling', chassis: ['E36'], stock: true, description: 'Molded EPDM replacement hose for the radiator-to-thermostat run.', specs: ['Fits E36 6-cylinder models', 'Reinforced EPDM construction', 'Includes molded bend'], icon: '⌁', tone: 'blue' },
  { id: 'water-pump-e46', name: 'Water Pump — Aluminum', oem: '11517527910', category: 'Cooling', chassis: ['E46'], stock: true, description: 'High-flow replacement pump with a durable aluminum impeller.', specs: ['E46 323i / 325i / 328i / 330i', 'Aluminum impeller', 'Gasket included'], icon: '◉', tone: 'cyan' },
  { id: 'thermostat-e30', name: 'Thermostat & Housing', oem: '11531297284', category: 'Cooling', chassis: ['E30'], stock: false, description: 'Temperature-matched thermostat assembly for classic M20 cooling systems.', specs: ['E30 325e / 325i', 'Opening temperature: 80°C', 'Housing sold as a matched assembly'], icon: '◌', tone: 'orange' },
  { id: 'clutch-master-e36', name: 'Clutch Master Cylinder', oem: '21526758820', category: 'Drivetrain', chassis: ['E36'], stock: true, description: 'Direct-fit hydraulic master cylinder to restore consistent pedal feel.', specs: ['E36 manual transmission', 'Bore: 19.05 mm', 'DOT 4 compatible'], icon: '⟳', tone: 'violet' },
  { id: 'guibo-e30-e36', name: 'Driveshaft Flex Disc', oem: '26111225624', category: 'Drivetrain', chassis: ['E30', 'E36'], stock: true, description: 'Reinforced flex disc designed to absorb drivetrain vibration.', specs: ['Select E30 and E36 models', 'Check bolt pattern before ordering', 'Six-bolt connection'], icon: '◎', tone: 'pink' },
  { id: 'springs-e46', name: 'Sport Lowering Springs', oem: '33531093633', category: 'Suspension', chassis: ['E46'], stock: true, description: 'Progressive-rate springs with a modest daily-friendly drop.', specs: ['E46 sedan / coupe', 'Approx. 30 mm front / 20 mm rear', 'Designed for standard sport dampers'], icon: '≋', tone: 'green' },
  { id: 'control-arm-e36', name: 'Front Control Arm Bushing', oem: '31129058819', category: 'Suspension', chassis: ['E36'], stock: false, description: 'Hydraulic-style bushing restores front-end precision and braking stability.', specs: ['E36 1992–1999', 'Left and right fitment varies', 'Press-in installation'], icon: '⌖', tone: 'yellow' },
  { id: 'mirror-e30', name: 'Left Manual Door Mirror', oem: '51161881149', category: 'Exterior', chassis: ['E30'], stock: true, description: 'Classic replacement mirror shell with manual adjustment.', specs: ['E30 coupe / sedan', 'Left-hand driver side', 'Primer-ready finish'], icon: '◇', tone: 'steel' },
  { id: 'grille-e46', name: 'Kidney Grille Pair', oem: '51137042962', category: 'Exterior', chassis: ['E46'], stock: true, description: 'Gloss-black grille set with factory-style mounting tabs.', specs: ['E46 pre-facelift sedan', 'Pair: left and right', 'UV-stable ABS'], icon: '▦', tone: 'slate' },
]

export const catalogForPrompt = parts.map(({ id, name, oem, category, chassis, stock, description }) => ({ id, name, oem, category, chassis, stock, description }))
