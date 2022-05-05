export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },

        {
            name: 'comment',
            title: 'Comment',
            type: 'text',
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            decription: "Comments wont show on the site without approval"
        },
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: { type: 'post' },
        },

    ],


}
