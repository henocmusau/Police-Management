import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsHousesFill } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { RiSettingsFill } from "react-icons/ri";
import { Metadata } from "next";

export const navLinks = [
    {
        label: 'Dashboard',
        link: '/',
        icon: MdDashboard
    },
    {
        label: 'Staff',
        link: '/staff',
        icon: FaUsers
    },
    {
        label: 'Positions',
        link: '/positions',
        icon: BsHousesFill
    },
    {
        label: 'Transferts',
        link: '/transferts',
        icon: BiTransferAlt
    },
    {
        label: 'Settings',
        link: '/settings',
        icon: RiSettingsFill
    },
]



export const defaultMetadata: Metadata = {
    title: 'PTasker - Simplifiez la gestion de votre commissariat !',
    description: 'Une solution complète pour la gestion des officiers, des cas, et des opérations au sein de votre commissariat.',
    keywords: ['gestion, commissariat, police, officiers, cas, patrouilles, rapports'],
    generator: 'Henoc Musau',
    applicationName: 'PTasker',
    referrer: 'origin-when-cross-origin',
    authors: [{ name: 'Henoc Musau' }],
    // authors: [{ name: 'Henoc Musau' }, { name: 'Josh', url: 'https://nextjs.org' }],
    creator: 'Henoc Musau',
    publisher: 'Henoc Musau',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('http://localhost:3000'),
    alternates: {
        canonical: '/',
        // languages: {
        //   'en-US': '/en-US',
        //   'de-DE': '/de-DE',
        // },
    },
    openGraph: {
        // images: ogImage.src,
        // images: '/og-image.png',
        title: 'PTasker - Outil de gestion pour les forces de police',
        description: 'Découvrez comment notre application peut transformer la gestion quotidienne de votre commissariat.',
        url: 'http://localhost:3000',
        siteName: 'PTasker',
        images: [
            {
                url: 'https://nextjs.org/og.png', // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: 'My custom alt',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gestion Commissariat - Simplifiez la gestion de votre commissariat',
        description: 'Optimisez les opérations et la gestion des ressources avec notre application dédiée aux professionnels de la police.',
        // siteId: '1467726470533754880',
        creator: '@henocmusau',
        creatorId: '1467726470533754880',
        images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    },
    category: 'Management'
}



export const policeOfficers = [
    {
        id: 1,
        firstname: "James",
        middlename: "A",
        lastname: "Smith",
        age: 45,
        gender: "M",
        rank: "Cdt",
        function: "Pat",
        position: "Poste1",
    },
    {
        id: 2,
        firstname: "Emily",
        middlename: "B",
        lastname: "Johnson",
        age: 34,
        gender: "F",
        rank: "Lt",
        function: "Det",
        position: "Poste2",
    },
    {
        id: 3,
        firstname: "Michael",
        middlename: "C",
        lastname: "Williams",
        age: 38,
        gender: "M",
        rank: "Sgt",
        function: "Traf",
        position: "Poste3",
    },
    {
        id: 4,
        firstname: "Jessica",
        middlename: "D",
        lastname: "Brown",
        age: 42,
        gender: "F",
        rank: "Cpl",
        function: "K9",
        position: "Poste4",
    },
    {
        id: 5,
        firstname: "Christopher",
        middlename: "E",
        lastname: "Jones",
        age: 36,
        gender: "M",
        rank: "Pvt",
        function: "SWAT",
        position: "Poste5",
    },
    // ... (autres agents de police fictifs)
    {
        id: 16,
        firstname: "Jennifer",
        middlename: "Y",
        lastname: "Davis",
        age: 29,
        gender: "F",
        rank: "Pvt",
        function: "SWAT",
        position: "Poste10",
    },
    {
        id: 17,
        firstname: "Jean",
        middlename: "A",
        lastname: "Dupont",
        age: 45,
        gender: "M",
        rank: "Cdt",
        function: "Pat",
        position: "Poste1",
    },
    {
        id: 18,
        firstname: "Marie",
        middlename: "B",
        lastname: "Durand",
        age: 34,
        gender: "F",
        rank: "Lt",
        function: "Det",
        position: "Poste2",
    },
    {
        id: 19,
        firstname: "Luc",
        middlename: "C",
        lastname: "Petit",
        age: 38,
        gender: "M",
        rank: "Sgt",
        function: "Traf",
        position: "Poste3",
    },
    {
        id: 20,
        firstname: "Sophie",
        middlename: "D",
        lastname: "Leroy",
        age: 42,
        gender: "F",
        rank: "Cpl",
        function: "K9",
        position: "Poste4",
    },
    {
        id: 21,
        firstname: "Émile",
        middlename: "E",
        lastname: "Moreau",
        age: 36,
        gender: "M",
        rank: "Pvt",
        function: "SWAT",
        position: "Poste5",
    },
    {
        id: 22,
        firstname: "Rémi",
        middlename: "Z",
        lastname: "Martin",
        age: 29,
        gender: "M",
        rank: "Pvt",
        function: "SWAT",
        position: "Poste10",
    },
    {
        id: 32,
        firstname: "Ahmed",
        middlename: "M",
        lastname: "Al-Farsi",
        age: 45,
        gender: "M",
        rank: "Cdt",
        function: "Pat",
        position: "Poste1",
    },
    {
        id: 33,
        firstname: "Layla",
        middlename: "N",
        lastname: "Al-Masri",
        age: 34,
        gender: "F",
        rank: "Lt",
        function: "Det",
        position: "Poste2",
    },
    {
        id: 34,
        firstname: "Omar",
        middlename: "O",
        lastname: "Al-Rashid",
        age: 38,
        gender: "M",
        rank: "Sgt",
        function: "Traf",
        position: "Poste3",
    },
    {
        id: 35,
        firstname: "Fatima",
        middlename: "P",
        lastname: "Al-Hassan",
        age: 42,
        gender: "F",
        rank: "Cpl",
        function: "K9",
        position: "Poste4",
    },
    {
        id: 36,
        firstname: "Youssef",
        middlename: "Q",
        lastname: "Al-Sayed",
        age: 36,
        gender: "M",
        rank: "Pvt",
        function: "SWAT",
        position: "Poste5",
    },
    {
        id: 37,
        firstname: "Nadia",
        middlename: "R",
        lastname: "Al-Amari",
        age: 29,
        gender: "F",
        rank: "Pvt",
        function: "SWAT",
        position: "Poste10",
    },
];