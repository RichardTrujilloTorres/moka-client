export const items = [
    {
        icon: 'mdi-home',
        text: 'Home',
        route: 'Home',
    },
    {
        icon: 'mdi-account',
        'icon-alt': 'mdi-chevron-down',
        text: 'Users',
        model: false,
        children: [
            {
                icon: 'mdi-account-box',
                text: 'Accounts',
                route: 'Account',
            },
            {
                icon: 'mdi-account-supervisor',
                text: 'Admins',
                route: 'Admin',
            },
            {
                icon: 'mdi-account-group',
                text: 'Roles',
                route: 'Role',
            },
            {
                icon: 'mdi-key',
                text: 'Permissions',
                route: 'Permission',
            },
        ],
    },
    {
        icon: 'mdi-cloud',
        text: 'Cloud',
        route: 'Cloud',
    },
    {
        icon: 'mdi-database',
        text: 'Storage',
        route: 'Storage',
    },
    {
        icon: 'mdi-history',
        text: 'Resources history',
        route: 'History',
    },
    {
        icon: 'mdi-cog',
        text: 'Settings',
        route: 'Settings',
    },
    {
        icon: 'mdi-message',
        text: 'Feedback',
        route: 'Feedback',
    },
    {
        icon: 'mdi-help-circle',
        text: 'Help',
        route: 'Help',
    },
    {
        text: 'About',
        route: 'About',
    },
];
