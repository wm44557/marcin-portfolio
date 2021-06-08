export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },

        {
            name: 'frontImage',
            title: 'Front Image',
            type: 'image',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'descriptionpl',
            title: 'Descriptionpl',
            type: 'string'
        },
        {
            name: 'github',
            title: 'Github',
            type: 'string'
        },
        {
            name: 'live',
            title: 'Live',
            type: 'string'
        },
        {
            name: 'yt',
            title: 'Yt',
            type: 'string'
        },
        {
            name: 'userData',
            title: 'User Data',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type:'image'}]
        },
        {
            name: 'isGroup',
            title: 'Is group?',
            type: 'boolean',
            options: {
                layout: 'checkbox',
            },
        },
        {
            name:'skillsDev',
            title:"SkillsDev",
            type:'array',
            of:[   {
                name: 'devDescription',
                title: 'Dev Description',
                type: 'devDescription'
            }]
        },
        {
            name:'skillsDb',
            title:"Skills DB",
            type:'array',
            of:[   {
                name: 'dbDescription',
                title: 'DB Description',
                type: 'dbDescription'
            }]
        },
        {
            name:'skillsTools',
            title:"Skills Tools",
            type:'array',
            of:[   {
                name: 'toolsDescription',
                title: 'Tools Description',
                type: 'toolsDescription'
            }]
        }

    ]
}
