
export default {
    name: 'toolsDescription',
    title: 'Tools Description',
    type: 'object',
    fields: [
        {name: 'description', type: 'string', title: 'Description'},
        {name: 'descriptionpl', type: 'string', title: 'Descriptionpl'},

        {name: 'skills', type: 'reference', to:[
                {type:'tools'},
            ]}
    ]
}
