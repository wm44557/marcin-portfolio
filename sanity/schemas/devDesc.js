
export default {
    name: 'devDescription',
    title: 'Dev Description',
    type: 'object',
    fields: [
        {name: 'description', type: 'string', title: 'Description'},
        {name: 'descriptionpl', type: 'string', title: 'Descriptionpl'},

        {name: 'skills', type: 'reference', to:[
                {type:'development'},
            ]}
    ]
}
