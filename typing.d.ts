
export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    mainImage: string;
    slug: {
        current: string;
    };
    author: {
        name: string;
        image: string;
    },
    comments: Comment[];
    description: string;
    body: [object];

}


export interface Comment {
    approved: boolean;
    comment: string;
    name: string;
    email: string;
    _createdAt: string;
    post: {
        _ref: string;
        _type: string;
    },

    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;

}

