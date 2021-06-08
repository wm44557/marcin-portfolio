import { FaDatabase as icon } from 'react-icons/fa';

export default {
    name: 'tools',
    title: 'Tools',
    type: 'document',
    icon,
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name: 'name',
            title: 'Tool name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'descriptionpl',
            title: 'DescriptionPl',
            type: 'string',
        },
        {
            title: 'color',
            name: 'color',
            type: 'string',
            options: {
                list: [
                    {title: 'primary', value: 'primary'},
                    {title: 'secondary', value: 'secondary'},
                    {title: 'tertiary', value: 'tertiary'},
                    {title: 'quaternary', value: 'quaternary'},
                    {title: 'quinary', value: 'quinary'},
                    {title: 'senary', value: 'senary'},
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
            }
        }
    ],

};
