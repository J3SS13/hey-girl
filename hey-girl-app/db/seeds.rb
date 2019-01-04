# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Industry.destroy_all

Industry.create([
    {
      name: 'Tech'
    },
    {
      name: 'Film'
    }

  ])

Post.destroy_all

Post.create([
    {
      topic: 'Not making the same amount of money as male coworkers.',
      user_name: "Mary",
      industry_id: 2
    },
    {
      topic: "I'm not sure how to ask for a promotion.",
      user_name: "Gladys",
      industry_id: 1
    }

  ])


  Event.destroy_all

  Event.create([
      {
        name: 'Screenwriter Brunch',
        location: '123 Broadway, New York, NY 10017',
        date: 'Jan 30, 2019',
        time: '2pm',
        industry_id: 2
      },
      {
        name: 'Code and Cupcakes',
        location: '12 5th Ave, New York, NY 10017',
        date: 'Feb 1, 2019',
        time: '2pm',
        industry_id: 1
      }
    ])

    Comment.destroy_all

    Comment.create([
        {
          body: 'I feel the same. How?',
          user_name: 'suzi q',
          post_id: 1
        }
      ])
