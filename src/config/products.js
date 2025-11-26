// src/config/products.js - UPDATED WITH CONFIGURABLE IMAGE PATHS
import bpMachine from '../assets/products/bp-machine.jpg';
import glucometer from '../assets/products/glucometer.jpg';
import pulseOximeter from '../assets/products/pulse-oximeter.jpg';
import thermometer from '../assets/products/thermometer.jpg';
import hotAirBag from '../assets/products/hot-air-bag.jpg';
import nebuliser from '../assets/products/nebuliser.jpg';
import ecgPhilips from '../assets/products/ecg-philips.jpg';
import ecgMindray from '../assets/products/ecg-mindray.jpg';
import ecgNikkon from '../assets/products/ecg-nikkon.jpg';
import ecgBpl from '../assets/products/ecg-bpl.jpg';
import ecgSchiller from '../assets/products/ecg-schiller.jpg';
import tempPhilips from '../assets/products/temp-philips.jpg';
import tempMindray from '../assets/products/temp-mindray.jpg';
import tempSchiller from '../assets/products/temp-schiller.jpg'; 
import spo2Philips from '../assets/products/spo2-philips.jpg';
import spo2Mindray from '../assets/products/spo2-mindray.jpg';
import spo2Nikkon from '../assets/products/spo2-nikkon.jpg'; 
import spo2Schiller from '../assets/products/spo2-schiller.jpg';
import nibpSinglePhilips from '../assets/products/nibp-single-philips.jpg';
import nibpDoublePhilips from '../assets/products/nibp-double-philips.jpg';
import nibpSingleMindray from '../assets/products/nibp-single-mindray.jpg';
import nibpDoubleMindray from '../assets/products/nibp-double-mindray.jpg';
import hosePhilips from '../assets/products/hose-philips.jpg';
import hoseMindray from '../assets/products/hose-mindray.jpg';
import hoseNikkon from '../assets/products/hose-nikkon.jpg';
import hoseSchiller from '../assets/products/hose-schiller.jpg';
import homecare from '../assets/products/home_care_products.jpg';
import ecgcables from '../assets/products/ecg_cables.jpg';
import tempProbes from '../assets/products/temperature_probes.jpg';
import spo2sensor from '../assets/products/spo2sensor.jpg';
import cuff from '../assets/products/cuff.jpg';
import hose from '../assets/products/hose.jpg';
import co2Insufflator from '../assets/products/co2_insuffolator.jpg';
import lightSource from '../assets/products/light_source.jpg';
import masimoRad97Probe from '../assets/products/masimo_probe.jpg';
// Image configuration - Update these paths when you add images
export const productImages = {
  // Home Care Products
  'bp-machine': bpMachine,
  'glucometer': glucometer, 
  'pulse-oximeter': pulseOximeter,
  'thermometer': thermometer,
  'hot-air-bag': hotAirBag, // You'll need to add this
  'nebuliser': nebuliser, // You'll need to add this
  'co2_insuffolator': co2Insufflator,
  'light_source': lightSource,
  'masimo_probe': masimoRad97Probe,
  
  // ECG Cables
  'ecg-philips': ecgPhilips,
  'ecg-mindray': ecgMindray,
  'ecg-nikkon': ecgNikkon,
  'ecg-bpl': ecgBpl,
  'ecg-schiller': ecgSchiller,
  
  // Temperature Probes
  'temp-philips': tempPhilips,
  'temp-mindray': tempMindray,
  'temp-schiller': tempSchiller, 
  
  // SpO2 Sensors
  'spo2-philips': spo2Philips,
  'spo2-mindray': spo2Mindray,
  'spo2-nikkon': spo2Nikkon,
  'spo2-schiller': spo2Schiller,
  
  // NIBP Cuffs
  'nibp-single-philips': nibpSinglePhilips,
  'nibp-double-philips': nibpDoublePhilips,
  'nibp-single-mindray': nibpSingleMindray,
  'nibp-double-mindray': nibpDoubleMindray,
  
  // NIBP Hoses
  'hose-philips': hosePhilips,
  'hose-mindray': hoseMindray,
  'hose-nikkon': hoseNikkon,
  'hose-schiller': hoseSchiller
};

// Product categories
export const productCategories = [
  {
    id: 'home-care',
    name: 'Home Care Products',
    icon: '🏠',
    description: 'Essential medical devices for home healthcare',
    image: homecare
  },
  {
    id: 'ecg-cables', 
    name: 'ECG Cables',
    icon: '📊',
    description: 'High-quality ECG cables for various monitor brands',
    image: ecgcables
  },
  {
    id: 'temperature-probes',
    name: 'Temperature Probes',
    icon: '🌡️',
    description: 'Precision temperature probes for medical monitors',
    image: tempProbes
  },
  {
    id: 'spo2-sensors',
    name: 'SpO2 Sensors',
    icon: '❤️',
    description: 'Clip-type SpO2 sensors for accurate oxygen monitoring',
    image: spo2sensor
  },
  {
    id: 'nibp-cuffs',
    name: 'NIBP Cuffs',
    icon: '💪',
    description: 'Single & double side NIBP cuffs for blood pressure monitoring',
    image: cuff
  },
  {
    id: 'nibp-hoses',
    name: 'NIBP Hoses',
    icon: '🔄',
    description: 'Durable NIBP hoses for various monitor brands',
    image: hose
  }
];

// Helper function to get image path
const getProductImage = (productId) => {
  return productImages[productId] || '/src/assets/products/placeholder.jpg'; // Fallback image
};

// Complete product catalog
export const allProducts = [
  // Home Care Products
  {
    id: 'bp-machine',
    name: 'BLOOD PRESSURE MACHINE',
    category: 'home-care',
    price: 'Contact',
    description: 'Digital blood pressure monitor for home use',
    features: ['Digital Display', 'Memory Function', 'One-touch Operation'],
    brands: ['Omron', 'Dr. Morepen', 'BPL'],
    image: getProductImage('bp-machine'),
    inStock: true,
    isFeatured: true
  },
  {
    id: 'glucometer',
    name: 'GULCOMETER WITH 25 STRIPS',
    category: 'home-care',
    price: 'Contact',
    description: 'Blood glucose monitoring system with strips',
    features: ['25 Test Strips', 'Fast Results', 'Compact Design'],
    brands: ['Accu-Chek', 'OneTouch', 'Contour'],
    image: getProductImage('glucometer'),
    inStock: true,
    isFeatured: true
  },
  {
    id: 'pulse-oximeter',
    name: 'PULSE OXIMETER',
    category: 'home-care',
    price: 'Contact',
    description: 'Finger-tip pulse oximeter for oxygen monitoring',
    features: ['OLED Display', 'Portable', 'Battery Operated'],
    brands: ['Choicemmed', 'Santamedical', 'Facelake'],
    image: getProductImage('pulse-oximeter'),
    inStock: true
  },
  {
    id: 'thermometer',
    name: 'THERMOMETER',
    category: 'home-care',
    price: 'Contact',
    description: 'Digital thermometer for accurate temperature reading',
    features: ['Fast Reading', 'Fever Alert', 'Water Resistant'],
    brands: ['Omron', 'Dr. Morepen', 'BPL'],
    image: getProductImage('thermometer'),
    inStock: true
  },
  {
    id: 'hot-air-bag',
    name: 'HOT AIR BAG',
    category: 'home-care',
    price: 'Contact',
    description: 'Hot air bag for therapeutic heat treatment',
    features: ['Adjustable Temperature', 'Auto Shut-off', 'Soft Cover'],
    brands: ['Romsons', 'Hospi Equip'],
    image: getProductImage('hot-air-bag'),
    inStock: true
  },
  {
    id: 'nebuliser',
    name: 'NEBULISER',
    category: 'home-care',
    price: 'Contact',
    description: 'Portable nebulizer for respiratory treatment',
    features: ['Portable', 'Quiet Operation', 'Complete Kit'],
    brands: ['Omron', 'Dr. Morepen', 'BPL'],
    image: getProductImage('nebuliser'),
    inStock: true,
    isFeatured: true
  },
  {
  id: 'co2-insufflator',
  name: 'CO₂ INSUFFLATOR',
  category: 'surgical-equipments',
  price: 'Contact',
  description: 'High-precision CO₂ insufflation system for laparoscopic procedures',
  features: [
    'Adjustable Flow Rates',
    'Real-Time Pressure Monitoring',
    'Integrated Safety Alarms',
    'High-Flow Insufflation'
  ],
  brands: ['Diamond'],
  image: getProductImage('co2_insuffolator'),
  inStock: true,
  isFeatured: true
  },
  {
  id: 'light-source',
  name: 'ENDOSCOPY LIGHT SOURCE',
  category: 'surgical-equipments',
  price: 'Contact',
  description: 'High-intensity medical-grade light source for endoscopic visualization',
  features: [
    'LED / Xenon Options',
    'Long Lamp Life',
    'High Brightness Output',
    'Compatible with Multiple Scopes'
  ],
  brands: ['Diamond'],
  image: getProductImage('light_source'),
  inStock: true,
  isFeatured: true
  },
  {
  id: 'masimo-rad97-probe',
  name: 'MASIMO RAD-97 PROBE',
  category: 'patient-monitoring',
  price: 'Contact',
  description: 'Sensor probe compatible with Masimo Rad-97 for accurate SpO₂ and pulse rate monitoring',
  features: [
    'High Accuracy',
    'Comfortable Patient Fit',
    'Compatible with Rad-97',
    'Durable Medical-Grade Cable'
  ],
  brands: ['Masimo'],
  image: getProductImage('masimo_probe'),
  inStock: true,
  isFeatured: true
},

  // ECG Cables
  {
    id: 'ecg-philips',
    name: 'ECG CABLE - PHILIPS',
    category: 'ecg-cables',
    price: 'Contact',
    description: 'Original Philips ECG patient cable',
    features: ['10-lead', 'Original Philips', 'High Quality'],
    brands: ['Philips'],
    image: getProductImage('ecg-philips'),
    inStock: true
  },
  {
    id: 'ecg-mindray',
    name: 'ECG CABLE - MINDRAY',
    category: 'ecg-cables',
    price: 'Contact',
    description: 'Mindray compatible ECG patient cable',
    features: ['10-lead', 'Mindray Compatible', 'Durable'],
    brands: ['Mindray'],
    image: getProductImage('ecg-mindray'),
    inStock: true
  },
  {
    id: 'ecg-nikkon',
    name: 'ECG CABLE - NIKKON KODHAN',
    category: 'ecg-cables',
    price: 'Contact',
    description: 'Nikkon Kodhan ECG patient cable',
    features: ['10-lead', 'Nikkon Compatible', 'Cost Effective'],
    brands: ['Nikkon Kodhan'],
    image: getProductImage('ecg-nikkon'),
    inStock: true
  },
  {
    id: 'ecg-bpl',
    name: 'ECG CABLE - BPL',
    category: 'ecg-cables',
    price: 'Contact',
    description: 'BPL compatible ECG patient cable',
    features: ['10-lead', 'BPL Compatible', 'Reliable'],
    brands: ['BPL'],
    image: getProductImage('ecg-bpl'),
    inStock: true
  },
  {
    id: 'ecg-schiller',
    name: 'ECG CABLE - SCHILLER',
    category: 'ecg-cables',
    price: 'Contact',
    description: 'Schiller compatible ECG patient cable',
    features: ['10-lead', 'Schiller Compatible', 'Premium Quality'],
    brands: ['Schiller'],
    image: getProductImage('ecg-schiller'),
    inStock: true
  },

  // Temperature Probes
  {
    id: 'temp-philips',
    name: 'TEMPERATURE PROBE - PHILIPS',
    category: 'temperature-probes',
    price: 'Contact',
    description: 'Philips temperature probe for patient monitors',
    features: ['Fast Response', 'Accurate', 'Philips Original'],
    brands: ['Philips'],
    image: getProductImage('temp-philips'),
    inStock: true
  },
  {
    id: 'temp-mindray',
    name: 'TEMPERATURE PROBE - MINDRAY',
    category: 'temperature-probes',
    price: 'Contact',
    description: 'Mindray temperature probe',
    features: ['Fast Response', 'Mindray Compatible', 'Reliable'],
    brands: ['Mindray'],
    image: getProductImage('temp-mindray'),
    inStock: true
  },
  {
    id: 'temp-schiller',
    name: 'TEMPERATURE PROBE - SCHILLER',
    category: 'temperature-probes',
    price: 'Contact',
    description: 'Schiller temperature probe',
    features: ['Fast Response', 'Schiller Compatible', 'High Accuracy'],
    brands: ['Schiller'],
    image: getProductImage('temp-schiller'),
    inStock: true
  },

  // SpO2 Sensors
  {
    id: 'spo2-philips',
    name: 'SPO2 SENSOR - PHILIPS',
    category: 'spo2-sensors',
    price: 'Contact',
    description: 'Philips clip-type SpO2 sensor',
    features: ['Clip-type', 'Philips Original', 'Comfortable'],
    brands: ['Philips'],
    image: getProductImage('spo2-philips'),
    inStock: true
  },
  {
    id: 'spo2-mindray',
    name: 'SPO2 SENSOR - MINDRAY',
    category: 'spo2-sensors',
    price: 'Contact',
    description: 'Mindray clip-type SpO2 sensor',
    features: ['Clip-type', 'Mindray Compatible', 'Accurate'],
    brands: ['Mindray'],
    image: getProductImage('spo2-mindray'),
    inStock: true
  },
  {
    id: 'spo2-nikkon',
    name: 'SPO2 SENSOR - NIKKON KODHAN',
    category: 'spo2-sensors',
    price: 'Contact',
    description: 'Nikkon Kodhan clip-type SpO2 sensor',
    features: ['Clip-type', 'Nikkon Compatible', 'Cost Effective'],
    brands: ['Nikkon Kodhan'],
    image: getProductImage('spo2-nikkon'),
    inStock: true
  },
  {
    id: 'spo2-schiller',
    name: 'SPO2 SENSOR - SCHILLER',
    category: 'spo2-sensors',
    price: 'Contact',
    description: 'Schiller clip-type SpO2 sensor',
    features: ['Clip-type', 'Schiller Compatible', 'Premium Quality'],
    brands: ['Schiller'],
    image: getProductImage('spo2-schiller'),
    inStock: true
  },

  // NIBP Cuffs
  {
    id: 'nibp-single-philips',
    name: 'NIBP CUFF SINGLE - PHILIPS',
    category: 'nibp-cuffs',
    price: 'Contact',
    description: 'Philips single side NIBP cuff',
    features: ['Single Side', 'Philips Original', 'Various Sizes'],
    brands: ['Philips'],
    image: getProductImage('nibp-single-philips'),
    inStock: true
  },
  {
    id: 'nibp-double-philips',
    name: 'NIBP CUFF DOUBLE - PHILIPS',
    category: 'nibp-cuffs',
    price: 'Contact',
    description: 'Philips double side NIBP cuff',
    features: ['Double Side', 'Philips Original', 'Comfortable'],
    brands: ['Philips'],
    image: getProductImage('nibp-double-philips'),
    inStock: true
  },
  {
    id: 'nibp-single-mindray',
    name: 'NIBP CUFF SINGLE - MINDRAY',
    category: 'nibp-cuffs',
    price: 'Contact',
    description: 'Mindray single side NIBP cuff',
    features: ['Single Side', 'Mindray Compatible', 'Durable'],
    brands: ['Mindray'],
    image: getProductImage('nibp-single-mindray'),
    inStock: true
  },
  {
    id: 'nibp-double-mindray',
    name: 'NIBP CUFF DOUBLE - MINDRAY',
    category: 'nibp-cuffs',
    price: 'Contact',
    description: 'Mindray double side NIBP cuff',
    features: ['Double Side', 'Mindray Compatible', 'Reliable'],
    brands: ['Mindray'],
    image: getProductImage('nibp-double-mindray'),
    inStock: true
  },

  // NIBP Hoses
  {
    id: 'hose-philips',
    name: 'NIBP HOSE - PHILIPS',
    category: 'nibp-hoses',
    price: 'Contact',
    description: 'Philips NIBP hose',
    features: ['Philips Original', 'Flexible', 'Durable'],
    brands: ['Philips'],
    image: getProductImage('hose-philips'),
    inStock: true
  },
  {
    id: 'hose-mindray',
    name: 'NIBP HOSE - MINDRAY',
    category: 'nibp-hoses',
    price: 'Contact',
    description: 'Mindray NIBP hose',
    features: ['Mindray Compatible', 'Flexible', 'Cost Effective'],
    brands: ['Mindray'],
    image: getProductImage('hose-mindray'),
    inStock: true
  },
  {
    id: 'hose-nikkon',
    name: 'NIBP HOSE - NIKKON KODHAN',
    category: 'nibp-hoses',
    price: 'Contact',
    description: 'Nikkon Kodhan NIBP hose',
    features: ['Nikkon Compatible', 'Flexible', 'Reliable'],
    brands: ['Nikkon Kodhan'],
    image: getProductImage('hose-nikkon'),
    inStock: true
  },
  {
    id: 'hose-schiller',
    name: 'NIBP HOSE - SCHILLER',
    category: 'nibp-hoses',
    price: 'Contact',
    description: 'Schiller NIBP hose',
    features: ['Schiller Compatible', 'Premium Quality', 'Durable'],
    brands: ['Schiller'],
    image: getProductImage('hose-schiller'),
    inStock: true
  }
];

// Featured products (subset of all products)
export const featuredProducts = allProducts.filter(product => product.isFeatured);

export default {
  categories: productCategories,
  featured: featuredProducts,
  all: allProducts,
  images: productImages // Export images config for easy management
};