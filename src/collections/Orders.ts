<<<<<<< HEAD
import { Access, CollectionConfig } from "payload/types";

const yourOwn: Access = ({ req: { user } }) => {
  if (user.role === "admin") return true;
=======
import { Access, CollectionConfig } from 'payload/types'

const yourOwn: Access = ({ req: { user } }) => {
  if (user.role === 'admin') return true
>>>>>>> master

  return {
    user: {
      equals: user?.id,
    },
<<<<<<< HEAD
  };
};
export const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "Your orders",
    description: "A summary of all your orders on iPlace.",
  },
  access: {
    read: yourOwn,
    update: ({ req }) => req.user.role === "admin",
    delete: ({ req }) => req.user.role === "admin",
    create: ({ req }) => req.user.role === "admin",
  },
  fields: [
    {
      name: "_isPaid",
      type: "checkbox",
      access: {
        read: ({ req }) => req.user.role === "admin",
=======
  }
}

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'Your Orders',
    description:
      'A summary of all your orders on DigitalHippo.',
  },
  access: {
    read: yourOwn,
    update: ({ req }) => req.user.role === 'admin',
    delete: ({ req }) => req.user.role === 'admin',
    create: ({ req }) => req.user.role === 'admin',
  },
  fields: [
    {
      name: '_isPaid',
      type: 'checkbox',
      access: {
        read: ({ req }) => req.user.role === 'admin',
>>>>>>> master
        create: () => false,
        update: () => false,
      },
      admin: {
        hidden: true,
      },
      required: true,
    },
    {
<<<<<<< HEAD
      name: "user",
      type: "relationship",
      admin: {
        hidden: true,
      },
      relationTo: "users",
      required: true,
    },
    {
      name: "products",
      type: "relationship",
      relationTo: "products",
=======
      name: 'user',
      type: 'relationship',
      admin: {
        hidden: true,
      },
      relationTo: 'users',
      required: true,
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
>>>>>>> master
      required: true,
      hasMany: true,
    },
  ],
<<<<<<< HEAD
};
=======
}
>>>>>>> master
