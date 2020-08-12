import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

const AboutSystem = () => import('../pages/text/AboutSystem');
const Architecture = () => import('../pages/text/Architecture');
const BuildNewBusinessModels = () => import('../pages/text/BuildNewBusinessModels');
const Clients = () => import('../pages/text/Clients');
const CognitionLevel = () => import('../pages/text/CognitionLevel');
const ConfigurationLevel = () => import('../pages/text/ConfigurationLevel');
const ConnectionLevel = () => import('../pages/text/ConnectionLevel');
const ConversionLevel = () => import('../pages/text/ConversionLevel');
const ConvinceEmployees = () => import('../pages/text/ConvinceEmployees');
const CostsAndFinancing = () => import('../pages/text/CostsAndFinancing');
const CPS = () => import('../pages/text/CPS');
const CreateDigitalizationPlan = () => import('../pages/text/CreateDigitalizationPlan');
const CyberAndCongruenceLevel = () => import('../pages/text/CyberAndCongruenceLevel');
const DigitalToolsUseful = () => import('../pages/text/DigitalToolsUseful');
const DigitizeKnowledge = () => import('../pages/text/DigitizeKnowledge');
const Example = () => import('../pages/text/Example');
const FiveSteps = () => import('../pages/text/FiveSteps');
const HowItWorks = () => import('../pages/text/HowItWorks');
const HowSafeIsIt = () => import('../pages/text/HowSafeIsIt');
const ImplementationAndPotential = () => import('../pages/text/ImplementationAndPotential');
const ImplementationPlanning = () => import('../pages/text/ImplementationPlanning');
const Implementing = () => import('../pages/text/Implementing');
const IncreaseSales = () => import('../pages/text/IncreaseSales');
const Industry = () => import('../pages/text/Industry');
const IndustryLevel = () => import('../pages/text/IndustryLevel');
const Inventory = () => import('../pages/text/Inventory');
const LevelInIndustry = () => import('../pages/text/LevelInIndustry');
const Limitation = () => import('../pages/text/Limitation');
const MyCompany = () => import('../pages/text/MyCompany');
const MyCompanyReady = () => import('../pages/text/MyCompanyReady');
const Networked = () => import('../pages/text/Networked');
const NewIndustry = () => import('../pages/text/NewIndustry');
const Optimize = () => import('../pages/text/Optimize');
const SevenSteps = () => import('../pages/text/SevenSteps');
const SmartFactory = () => import('../pages/text/SmartFactory');
const Technical = () => import('../pages/text/Technical');
const WhyDigitize = () => import('../pages/text/WhyDigitize');

const About = () => import('../pages/image/About');
const Digitalization = () => import('../pages/image/Digitalization');
const DigitalizationBusiness = () => import('../pages/image/DigitalizationBusiness');
const DigitalizationOrIndustry = () => import('../pages/image/DigitalizationOrIndustry');
const DigitalizationReview = () => import('../pages/image/DigitalizationReview');
const Industry4 = () => import('../pages/image/Industry4');
const Industry4Business = () => import('../pages/image/Industry4Business');
const Industry4Review = () => import('../pages/image/Industry4Review');
const MSA = () => import('../pages/image/MSA');
const MSAIntegration = () => import('../pages/image/MSAIntegration');
const MSAModules = () => import('../pages/image/MSAModules');
const MSAReview = () => import('../pages/image/MSAReview');
const OurSolution = () => import('../pages/image/OurSolution');

Vue.use(VueRouter);


  const routes = [
  {
    path: '/',
    name: 'MSA',
    component: MSA,
  },
  {
    path: '/aboutSystem',
    name: 'AboutSystem',
    
    component: AboutSystem,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', '7 шагов по внедрению'],
    },
  },
  {
    path: '/sevenSteps',
    name: 'SevenSteps',
    
    component: SevenSteps,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', '7 шагов по внедрению'],
    },
  },
  {
    path: '/buildNewBusinessModels',
    name: 'BuildNewBusinessModels',
    
    component: BuildNewBusinessModels,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/cognitionLevel',
    name: 'CognitionLevel',
    
    component: CognitionLevel,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/configurationLevel',
    name: 'ConfigurationLevel',
    
    component: ConfigurationLevel,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/connectionLevel',
    name: 'ConnectionLevel',
    
    component: ConnectionLevel,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/conversionLevel',
    name: 'ConversionLevel',
    
    component: ConversionLevel,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/costsAndFinancing',
    name: 'CostsAndFinancing',
    
    component: CostsAndFinancing,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/cps',
    name: 'CPS',
    
    component: CPS,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/createDigitalizationPlan',
    name: 'CreateDigitalizationPlan',
    
    component: CreateDigitalizationPlan,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/cyberAndCongruenceLevel',
    name: 'CyberAndCongruenceLevel',
    
    component: CyberAndCongruenceLevel,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/digitalToolsUseful',
    name: 'DigitalToolsUseful',
    
    component: DigitalToolsUseful,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/digitizeKnowledge',
    name: 'DigitizeKnowledge',
    
    component: DigitizeKnowledge,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/example',
    name: 'Example',
    
    component: Example,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
      menu: ['Гибкое производство', 'Система единичного заказа', 'Задачи'],
      slider: false,
      readMore: true,
    },
  },
  {
    path: '/fiveSteps',
    name: 'FiveSteps',
    
    component: FiveSteps,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/convinceEmployees',
    name: 'ConvinceEmployees',
    
    component: ConvinceEmployees,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/howItWorks',
    name: 'HowItWorks',
    
    component: HowItWorks,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/howSafeIsIt',
    name: 'HowSafeIsIt',
    
    component: HowSafeIsIt,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/implementationAndPotential',
    name: 'ImplementationAndPotential',
    
    component: ImplementationAndPotential,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
      menu: ['Реализация', 'Потенциал'],
      slider: false,
      readMore: true,
    },
  },
  {
    path: '/implementationPlanning',
    name: 'ImplementationPlanning',
    
    component: ImplementationPlanning,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/implementing',
    name: 'Implementing',
    
    component: Implementing,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/increaseSales',
    name: 'IncreaseSales',
    
    component: IncreaseSales,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/industry',
    name: 'Industry',
    
    component: Industry,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
      menu: ['Введение', 'Глобальные сети', 'Задачи'],
      slider: false,
      readMore: true,
    },
  },
  {
    path: '/networked',
    name: 'Networked',
    
    component: Networked,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
      menu: ['Единая система', 'Будущие сценарии'],
      slider: false,
      readMore: true,
    },
  },
  {
    path: '/industryLevel',
    name: 'IndustryLevel',
    
    component: IndustryLevel,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/inventory',
    name: 'Inventory',
    
    component: Inventory,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
      menu: ['Что должно быть достигнуто?', 'На какие вопросы нужно ответить?', 'Контрольный список'],
    },
  },
  {
    path: '/levelInIndustry',
    name: 'LevelInIndustry',
    
    component: LevelInIndustry,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/limitation',
    name: 'Limitation',
    
    component: Limitation,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
      menu: ['Что должно быть достигнуто?', 'На какие вопросы нужно ответить?', 'Контрольный список'],
    },
  },
  {
    path: '/clients',
    name: 'Clients',
    
    component: Clients,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/architecture',
    name: 'Architecture',
    
    component: Architecture,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/myCompany',
    name: 'MyCompany',
    
    component: MyCompany,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', '7 шагов по внедрению'],
    },
  },
  {
    path: '/myCompanyReady',
    name: 'MyCompanyReady',
    
    component: MyCompanyReady,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/newIndustry',
    name: 'NewIndustry',
    
    component: NewIndustry,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/optimize',
    name: 'Optimize',
    
    component: Optimize,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },
  {
    path: '/smartFactory',
    name: 'SmartFactory',
    
    component: SmartFactory,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/technical',
    name: 'Technical',
    
    component: Technical,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Обзор', 'Industry 4.0'],
    },
  },
  {
    path: '/whyDigitize',
    name: 'WhyDigitize',
    
    component: WhyDigitize,
    meta: {
      layout: 'TextLayout',
      nav: ['Главная', 'Вопросы бизнеса', 'Почему я должен оцифровывать компанию'],
    },
  },


  {
    path: '/about',
    name: 'About',
    
    component: About,
  },
  {
    path: '/digitalization',
    name: 'Digitalization',
    
    component: Digitalization,
  },
  {
    path: '/digitalizationReview',
    name: 'DigitalizationReview',
    
    component: DigitalizationReview,
  },
  {
    path: '/digitalizationBusiness',
    name: 'DigitalizationBusiness',
    
    component: DigitalizationBusiness,
  },
  {
    path: '/digitalizationOrIndustry',
    name: 'DigitalizationOrIndustry',
    
    component: DigitalizationOrIndustry,
  },
  {
    path: '/industry4',
    name: 'Industry4',
    
    component: Industry4,
  },
  {
    path: '/industry4business',
    name: 'Industry4Business',
    
    component: Industry4Business,
  },
  {
    path: '/industry4review',
    name: 'Industry4Review',
    
    component: Industry4Review,
  },
  {
    path: '/msaReview',
    name: 'MSAReview',
    
    component: MSAReview,
  },
  {
    path: '/msaModules',
    name: 'MSAModules',
    
    component: MSAModules,
  },
  {
    path: '/msaIntegration',
    name: 'MSAIntegration',
    
    component: MSAIntegration,
  },
  {
    path: '/ourSolution',
    name: 'OurSolution',
    
    component: OurSolution,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
