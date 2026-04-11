/**
 * Dictionary Type and Loader for i18n
 */

import type { Locale } from './config';
import { defaultLocale, getBaseLanguage, isValidLocale } from './config';

// Dictionary type - defines all translation keys
export interface Dictionary {
  // Common
  common: {
    search: string;
    filter: string;
    sort: string;
    loading: string;
    loadMore: string;
    noResults: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    delete: string;
    edit: string;
    view: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    submit: string;
    required: string;
    optional: string;
    all: string;
    none: string;
    yes: string;
    no: string;
    or: string;
    and: string;
    seeAll: string;
    learnMore: string;
    getStarted: string;
    readMore: string;
    showLess: string;
    showMore: string;
    clear: string;
    apply: string;
    reset: string;
    confirm: string;
    continue: string;
    skip: string;
    tryAgain: string;
    retry: string;
    refresh: string;
    download: string;
    upload: string;
    copy: string;
    copied: string;
    share: string;
    print: string;
    expand: string;
    collapse: string;
    open: string;
    closed: string;
    active: string;
    inactive: string;
    enabled: string;
    disabled: string;
  };
  
  // Navigation
  nav: {
    home: string;
    buy: string;
    rent: string;
    sell: string;
    agents: string;
    agencies: string;
    blog: string;
    about: string;
    contact: string;
    login: string;
    register: string;
    dashboard: string;
    properties: string;
    favorites: string;
    messages: string;
    profile: string;
    settings: string;
    logout: string;
    listing: string;
    property: string;
    pages: string;
    gridView: string;
    mapView: string;
    listView: string;
    compare: string;
    pricing: string;
    faq: string;
    invoice: string;
  };
  
  // Header
  header: {
    searchPlaceholder: string;
    addProperty: string;
    myProperties: string;
    notifications: string;
    language: string;
    theme: string;
    lightMode: string;
    darkMode: string;
  };
  
  // Hero
  hero: {
    findYourDreamHome: string;
    discoverPerfectProperty: string;
    searchProperties: string;
    buyProperty: string;
    rentProperty: string;
    sellProperty: string;
    enterLocation: string;
    propertyType: string;
    priceRange: string;
    searchBtn: string;
    advancedSearch: string;
    popularSearches: string;
    recentSearches: string;
    browseByCategory: string;
    videoTour: string;
    watchVideo: string;
    exploreProperties: string;
    trustedByThousands: string;
  };
  
  // Property Types
  propertyTypes: {
    title: string;
    subtitle: string;
    house: string;
    apartment: string;
    condo: string;
    townhouse: string;
    villa: string;
    penthouse: string;
    studio: string;
    land: string;
    commercial: string;
    office: string;
    retail: string;
    industrial: string;
    warehouse: string;
    hotel: string;
    resort: string;
  };
  
  // Services
  services: {
    title: string;
    subtitle: string;
    buy: {
      title: string;
      description: string;
    };
    rent: {
      title: string;
      description: string;
    };
    sell: {
      title: string;
      description: string;
    };
    learnMore: string;
  };
  
  // Featured
  featured: {
    title: string;
    subtitle: string;
    viewAll: string;
    newListings: string;
    popular: string;
    recommended: string;
    nearYou: string;
  };
  
  // Cities
  cities: {
    title: string;
    subtitle: string;
    viewAll: string;
    properties: string;
    explore: string;
  };
  
  // Selling Options
  sellingOptions: {
    title: string;
    subtitle: string;
    sellYourself: {
      title: string;
      description: string;
    };
    withAgent: {
      title: string;
      description: string;
    };
    getOffer: {
      title: string;
      description: string;
    };
    learnMore: string;
    getStarted: string;
  };
  
  // Testimonials
  testimonials: {
    title: string;
    subtitle: string;
    readMore: string;
    verified: string;
  };
  
  // Blog
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    viewAll: string;
    publishedOn: string;
    by: string;
    minRead: string;
    categories: string;
    tags: string;
    recentPosts: string;
    relatedPosts: string;
    comments: string;
    leaveComment: string;
    noComments: string;
    writeComment: string;
  };
  
  // CTA
  cta: {
    title: string;
    subtitle: string;
    getStarted: string;
    contactUs: string;
    scheduleConsultation: string;
    subscribeNewsletter: string;
    enterEmail: string;
    subscribe: string;
    newsletterSuccess: string;
    downloadApp: string;
    availableOn: string;
    appStore: string;
    googlePlay: string;
  };
  
  // Footer
  footer: {
    about: {
      title: string;
      description: string;
    };
    quickLinks: {
      title: string;
      about: string;
      careers: string;
      press: string;
      blog: string;
    };
    support: {
      title: string;
      help: string;
      faq: string;
      contact: string;
      feedback: string;
    };
    legal: {
      title: string;
      terms: string;
      privacy: string;
      cookies: string;
      sitemap: string;
    };
    social: {
      title: string;
      facebook: string;
      twitter: string;
      instagram: string;
      linkedin: string;
      youtube: string;
    };
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      button: string;
    };
    copyright: string;
    madeWith: string;
  };
  
  // Property
  property: {
    properties: string;
    property: string;
    forSale: string;
    forRent: string;
    sold: string;
    rented: string;
    pending: string;
    featured: string;
    newListing: string;
    hot: string;
    reduced: string;
    bedrooms: string;
    beds: string;
    bathrooms: string;
    baths: string;
    sqft: string;
    sqm: string;
    lotSize: string;
    yearBuilt: string;
    garage: string;
    parking: string;
    floors: string;
    price: string;
    pricePerSqft: string;
    monthlyPayment: string;
    location: string;
    address: string;
    city: string;
    state: string;
    country: string;
    neighborhood: string;
    zipCode: string;
    description: string;
    features: string;
    amenities: string;
    virtualTour: string;
    video: string;
    gallery: string;
    photos: string;
    floorPlans: string;
    map: string;
    nearby: string;
    reviews: string;
    scheduleTour: string;
    requestInfo: string;
    contactAgent: string;
    compare: string;
    share: string;
    favorite: string;
    unfavorite: string;
    similarProperties: string;
    overview: string;
    details: string;
    specifications: string;
    propertyId: string;
    listedOn: string;
    updatedOn: string;
    expiresOn: string;
    views: string;
    saves: string;
    inquiries: string;
    tours: string;
    statusHistory: string;
    priceHistory: string;
  };
  
  // Search & Filters
  search: {
    searchPlaceholder: string;
    locationPlaceholder: string;
    propertyType: string;
    propertyStatus: string;
    priceRange: string;
    minPrice: string;
    maxPrice: string;
    bedrooms: string;
    bathrooms: string;
    minSqft: string;
    maxSqft: string;
    yearBuilt: string;
    features: string;
    amenities: string;
    hasGarage: string;
    hasPool: string;
    hasGarden: string;
    hasBasement: string;
    petFriendly: string;
    furnished: string;
    newConstruction: string;
    sortBy: string;
    sortOptions: {
      newest: string;
      priceAsc: string;
      priceDesc: string;
      sqftAsc: string;
      sqftDesc: string;
      popular: string;
      relevance: string;
    };
    clearFilters: string;
    applyFilters: string;
    saveSearch: string;
    savedSearches: string;
    results: string;
    noResults: string;
    tryAdjusting: string;
    browseAll: string;
    moreFilters: string;
    lessFilters: string;
    activeFilters: string;
    removeFilter: string;
  };
  
  // Agent
  agent: {
    agents: string;
    agent: string;
    agency: string;
    agencies: string;
    verified: string;
    featured: string;
    topRated: string;
    totalListings: string;
    totalSales: string;
    soldProperties: string;
    rating: string;
    reviews: string;
    specialties: string;
    contact: string;
    message: string;
    viewProfile: string;
    viewListings: string;
    aboutMe: string;
    experience: string;
    languages: string;
    serviceAreas: string;
    activeListings: string;
    contactAgent: string;
    sendMessage: string;
    phone: string;
    email: string;
    office: string;
    license: string;
    memberSince: string;
    responseTime: string;
    lastActive: string;
  };
  
  // Agency
  agency: {
    agencies: string;
    agency: string;
    viewAgencies: string;
    ourTeam: string;
    ourAgents: string;
    totalAgents: string;
    officeLocations: string;
    founded: string;
    headquarters: string;
    website: string;
  };
  
  // Dashboard
  dashboard: {
    title: string;
    welcome: string;
    overview: string;
    myProperties: string;
    addProperty: string;
    editProperty: string;
    myFavorites: string;
    myReviews: string;
    messages: string;
    notifications: string;
    savedSearches: string;
    myPackage: string;
    myProfile: string;
    settings: string;
    accountSettings: string;
    securitySettings: string;
    notificationSettings: string;
    stats: {
      totalProperties: string;
      activeListings: string;
      pendingListings: string;
      soldProperties: string;
      totalViews: string;
      totalInquiries: string;
      totalTours: string;
      revenue: string;
      thisMonth: string;
      lastMonth: string;
      growth: string;
    };
    recentActivity: string;
    quickActions: string;
    performance: string;
    analytics: string;
    upgrade: string;
    currentPlan: string;
    daysRemaining: string;
  };
  
  // Auth
  auth: {
    login: string;
    register: string;
    logout: string;
    forgotPassword: string;
    resetPassword: string;
    email: string;
    password: string;
    confirmPassword: string;
    newPassword: string;
    name: string;
    firstName: string;
    lastName: string;
    phone: string;
    rememberMe: string;
    loginSuccess: string;
    registerSuccess: string;
    logoutSuccess: string;
    invalidCredentials: string;
    emailRequired: string;
    passwordRequired: string;
    noAccount: string;
    hasAccount: string;
    signInWith: string;
    signUpWith: string;
    orContinueWith: string;
    agreeToTerms: string;
    termsOfService: string;
    privacyPolicy: string;
    and: string;
    verifyEmail: string;
    verificationSent: string;
    checkInbox: string;
    resendVerification: string;
    backToLogin: string;
    setNewPassword: string;
    passwordResetSent: string;
    backToSignIn: string;
  };
  
  // Forms
  forms: {
    required: string;
    invalidEmail: string;
    passwordTooShort: string;
    passwordsDoNotMatch: string;
    phoneInvalid: string;
    selectOption: string;
    enterValue: string;
    minLength: string;
    maxLength: string;
    minValue: string;
    maxValue: string;
    invalidUrl: string;
    invalidDate: string;
    invalidNumber: string;
    uploadImage: string;
    uploadImages: string;
    dragDrop: string;
    maxFileSize: string;
    supportedFormats: string;
  };
  
  // Errors
  errors: {
    notFound: string;
    serverError: string;
    unauthorized: string;
    forbidden: string;
    somethingWentWrong: string;
    tryAgain: string;
    goHome: string;
    contactSupport: string;
    pageNotFound: string;
    errorOccurred: string;
    networkError: string;
    sessionExpired: string;
    accessDenied: string;
  };
  
  // Success
  success: {
    saved: string;
    updated: string;
    deleted: string;
    submitted: string;
    sent: string;
    uploaded: string;
    published: string;
    unpublished: string;
    added: string;
    removed: string;
  };
  
  // Confirm
  confirm: {
    delete: string;
    deleteProperty: string;
    deleteAccount: string;
    logout: string;
    unsavedChanges: string;
    cancelEdit: string;
  };
  
  // Tour
  tour: {
    scheduleTour: string;
    inPerson: string;
    virtual: string;
    videoCall: string;
    selectDate: string;
    selectTime: string;
    yourInfo: string;
    tourType: string;
    preferredTime: string;
    morning: string;
    afternoon: string;
    evening: string;
    yourName: string;
    yourEmail: string;
    yourPhone: string;
    message: string;
    submitRequest: string;
    tourRequested: string;
    tourConfirmed: string;
    tourCancelled: string;
    reschedule: string;
    cancelTour: string;
  };
  
  // Inquiry
  inquiry: {
    contactAgent: string;
    requestInfo: string;
    yourName: string;
    yourEmail: string;
    yourPhone: string;
    message: string;
    sendMessage: string;
    inquirySent: string;
    iAmInterested: string;
    callMe: string;
    scheduleViewing: string;
  };
  
  // Mortgage
  mortgage: {
    calculator: string;
    homePrice: string;
    downPayment: string;
    loanAmount: string;
    interestRate: string;
    loanTerm: string;
    years: string;
    monthlyPayment: string;
    totalPayment: string;
    totalInterest: string;
    calculate: string;
    preQualify: string;
  };
  
  // Compare
  compare: {
    title: string;
    subtitle: string;
    addProperty: string;
    removeProperty: string;
    clearAll: string;
    noProperties: string;
    selectProperties: string;
    price: string;
    bedrooms: string;
    bathrooms: string;
    sqft: string;
    yearBuilt: string;
    garage: string;
    lotSize: string;
    features: string;
  };
  
  // Pricing
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    yearly: string;
    save: string;
    free: string;
    popular: string;
    enterprise: string;
    currentPlan: string;
    upgrade: string;
    downgrade: string;
    contact: string;
    getStarted: string;
    features: string;
    includes: string;
    properties: string;
    listings: string;
    perMonth: string;
    perYear: string;
    billedMonthly: string;
    billedYearly: string;
    allFeaturesIncluded: string;
  };
  
  // Invoice
  invoice: {
    title: string;
    invoiceNumber: string;
    invoiceDate: string;
    dueDate: string;
    status: string;
    paid: string;
    pending: string;
    overdue: string;
    cancelled: string;
    description: string;
    quantity: string;
    unitPrice: string;
    amount: string;
    subtotal: string;
    tax: string;
    total: string;
    amountDue: string;
    payNow: string;
    downloadPdf: string;
    billTo: string;
    from: string;
  };
}

// Dictionary cache
const dictionaries: Partial<Record<Locale, Dictionary>> = {};

/**
 * Get dictionary for a specific locale
 * Falls back to base language dictionary if country-specific not found
 */
export async function getDictionary(locale: Locale = defaultLocale): Promise<Dictionary> {
  // Return cached dictionary if available
  if (dictionaries[locale]) {
    return dictionaries[locale]!;
  }
  
  try {
    // Try to load country-specific dictionary from public/locales/
    const dictionary = await import(`../../../public/locales/${locale}/common.json`);
    dictionaries[locale] = dictionary.default as Dictionary;
    return dictionaries[locale]!;
  } catch {
    // If country-specific not found, try base language
    const baseLanguage = getBaseLanguage(locale);
    
    if (baseLanguage !== locale) {
      try {
        console.warn(`Dictionary for "${locale}" not found, falling back to "${baseLanguage}"`);
        const baseDictionary = await import(`../../../public/locales/${baseLanguage}/common.json`);
        dictionaries[locale] = baseDictionary.default as Dictionary;
        return dictionaries[locale]!;
      } catch {
        // Continue to default fallback
      }
    }
    
    // Fall back to default locale
    if (locale !== defaultLocale) {
      console.warn(`Dictionary for "${locale}" not found, falling back to "${defaultLocale}"`);
      return getDictionary(defaultLocale);
    }
    
    throw new Error(`Failed to load default dictionary for locale "${defaultLocale}"`);
  }
}

/**
 * Get a specific translation by key path
 */
export function t(dictionary: Dictionary, path: string, fallback?: string): string {
  const keys = path.split('.');
  let value: unknown = dictionary;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return fallback ?? path;
    }
  }
  
  return typeof value === 'string' ? value : (fallback ?? path);
}

export type { Dictionary as DictionaryType };
