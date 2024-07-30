// Common schemas
import localePortableText from './web/objects/localeObjects/localePortableText'
import localeSlug from './web/objects/localeObjects/localeSlug'
import localeText from './web/objects/localeObjects/localeText'

// Document types
import blogCategory from './web/documents/blog/blogCategory'
import blogPost from './web/documents/blog/blogPost'
import blogSettings from './web/documents/blog/blogSettings'
import company from './web/documents/company'
import contactForm from './web/documents/contactForm'
import event from './web/documents/event'
import eventCategory from './web/documents/eventCategory'
import eventRegistrationForm from './web/documents/eventRegistrationForm'
import eventSettings from './web/documents/eventSettings'
import location from './web/documents/location'
import job from './web/documents/job'
import jobCategory from './web/documents/jobCategory'
import jobType from './web/documents/jobType'
import legalDocument from './web/documents/legalDocument'
import page from './web/documents/page'
import frontPage from './web/documents/frontPage'
import eventsPage from './web/documents/eventsPage'
import benefitsPage from './web/documents/benefitsPage'
import partners from './web/documents/partners'
import person from './web/documents/person'
import settings from './web/documents/settings'
import benefit from './web/documents/benefit'
import benefitCategory from './web/documents/benefitCategory'

// Navigations
import mainNavigation from './web/documents/navigation/main'
import fullNavigation from './web/documents/navigation/full'

// Object types
// Localed fields
import localeBigHeadingPortableText from './web/objects/localeObjects/localeBigHeadingPortableText'
import localeHeadingPortableText from './web/objects/localeObjects/localeHeadingPortableText'
import localeString from './web/objects/localeObjects/localeString'
// Portable text variants
import portableText from './web/objects/portableText/portableText'
import bigHeadingPortableText from './web/objects/portableText/bigHeadingPortableText'
import headingPortableText from './web/objects/portableText/headingPortableText'
// Sections
import bigHeadingSection from './web/objects/sections/bigHeadingSection'
import bigPeopleSection from './web/objects/sections/bigPeopleSection'
import formSection from './web/objects/sections/formSection'
import futureEventsSection from './web/objects/sections/futureEventsSection'
import heroSection from './web/objects/sections/heroSection'
import jobsSection from './web/objects/sections/jobsSection'
import keyFigureSection from './web/objects/sections/keyFiguresSection'
import mainPartnersSection from './web/objects/sections/mainPartnersSection'
import partnersSection from './web/objects/sections/partnersSection'
import peopleProfilesSection from './web/objects/sections/peopleProfilesSection'
import productsSection from './web/objects/sections/productsSection'
import smallPeopleGroup from './web/objects/sections/smallPeopleGroup'
import smallPeopleSection from './web/objects/sections/smallPeopleSection'
import textSection from './web/objects/sections/textSection'
import pastEventsSection from './web/objects/sections/pastEventsSection'
// Event stuff
import eventLink from './web/objects/event/link'
// Links
import externalLink from './web/objects/links/externalLink'
import internalLink from './web/objects/links/internalLink'
import link from './web/objects/links/link'
// Navigation
import navigationItem from './web/objects/navigation/navigationItem'
import subPage from './web/objects/navigation/subPage'
// Form fields
import checkbox from './web/objects/form/checkbox'
import singleSelection from './web/objects/form/singleSelection'
import textField from './web/objects/form/textField'
// Other
import defaultField from './web/objects/defaultField'
import field from './web/objects/field'
import keyFigure from './web/objects/keyFigure'
import imageWithAlt from './web/objects/imageWithAlt'
import mainImage from './web/objects/mainImage'
import personProfile from './web/objects/personProfile'
import product from './web/objects/product'
import youtube from './web/objects/youtube'

// For Satama Appro
import contactPerson from './dumppiSides/contactPerson'
import satamaApproHeroSection from './dumppiSides/sections/heroSection'
import iconHero from './dumppiSides/iconHero'
import satamaApproTextSection from './dumppiSides/sections/textSection'
import textColumn from './dumppiSides/textColumn'
import satamaApproPage from './dumppiSides/page'
import contactSection from './dumppiSides/sections/contactSection'
import bannerSection from './dumppiSides/sections/bannerSection'

// Common schemas
import localeBlock from './common/objects/localeBlock'

// Then we give our schema to the builder and provide the result to Sanity
export default {
  webSchema: [
    /* Your types here! */
    // Document types
    blogCategory,
    blogPost,
    blogSettings,
    company,
    contactForm,
    event,
    eventCategory,
    eventRegistrationForm,
    eventSettings,
    location,
    job,
    jobCategory,
    jobType,
    legalDocument,
    page,
    frontPage,
    eventsPage,
    benefitsPage,
    partners,
    person,
    settings,
    mainNavigation,
    fullNavigation,
    benefit,
    benefitCategory,

    // Object types
    bigHeadingSection,
    bigPeopleSection,
    formSection,
    futureEventsSection,
    heroSection,
    jobsSection,
    keyFigureSection,
    mainPartnersSection,
    partnersSection,
    peopleProfilesSection,
    productsSection,
    smallPeopleGroup,
    smallPeopleSection,
    textSection,
    pastEventsSection,
    eventLink,
    externalLink,
    internalLink,
    link,
    navigationItem,
    subPage,
    checkbox,
    singleSelection,
    textField,
    defaultField,
    field,
    keyFigure,
    imageWithAlt,
    mainImage,
    personProfile,
    product,
    youtube,
    localeBigHeadingPortableText,
    localeHeadingPortableText,
    localePortableText,
    localeSlug,
    localeString,
    localeText,
    portableText,
    bigHeadingPortableText,
    headingPortableText
  ],
  dumppiSidesSchema: [
    contactPerson,
    satamaApproHeroSection,
    iconHero,
    satamaApproTextSection,
    textColumn,
    satamaApproPage,
    localeString,
    localeText,
    localeSlug,
    localeBlock,
    contactSection,
    bannerSection
  ]
}
