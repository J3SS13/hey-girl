# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

jess = User.create(email: 'jess@jess.jess', password: '1234')

Industry.destroy_all
industries = Industry.create([
    {
      name: 'Technology'
    },
    {
      name: 'Engineering'
    },

    {
      name: 'Science'
    },
    {
      name: 'Entertainment'
    }

  ])


Post.destroy_all
industries[0].posts.create(topic:'I found out my male coworker makes almost twice my salary.', user_id: jess.id)
industries[0].posts.create(topic:'One of my male coworkers always interrupts me whenever I answer questions in our team meeting.', user_id: jess.id)
industries[0].posts.create(topic:"There is not designated Mother's Room in my office.", user_id: jess.id)
industries[1].posts.create(topic:'I would like to have a female mentor, but there are no women in leadship in my company.', user_id: jess.id)
industries[1].posts.create(topic:'How do I continue to move up in my career, and also feel able to take maternity leave?', user_id: jess.id)
industries[2].posts.create(topic:"I'm always mistaken for a nurse. I'm a brain surgeon", user_id: jess.id)
industries[2].posts.create(topic:'My male coworkers undercut my knowledge by restating what I have already explained.', user_id: jess.id)
industries[3].posts.create(topic:'Employers are worried to hire women. Is this because they are afraid of MeToo ', user_id: jess.id)
industries[3].posts.create(topic:'How can I get more involved with other female filmmakes?', user_id: jess.id)

Event.destroy_all
industries[0].events.create(name: 'Comedy and Code',location: 'Los Angelos, LA', date: 'Mar 30, 2019',time: '6:00pm',)
industries[1].events.create(name: 'Women in Mechanical Engineering',location: 'Los Angelos, LA', date: 'Apr 3, 2019',time: '7:00pm',)
industries[2].events.create(name: 'Astro-physics',location: 'New York, NY', date: 'Jan 30, 2019',time: '4:00pm',)
industries[3].events.create(name: 'Fireside Chat with Sofia Coppola on Directing',location: 'New York, NY', date: 'Feb 5, 2019',time: '1:00pm',)

Comment.destroy_all

comment1 = Post.create(body:'Start a dialog with your HR department. Try not to make it directly about your coworker.', user_name: 'n/a')
comments = posts.comments
comments << comment1
comments.jess << comment1
#
#
# posts[1].comment.create(body:'Start a dialog with your HR department. Try not to make it directly about your coworker.', user_name: 'n/a')
# posts[2].comment.create(body:'Make him aware of what he is doing and how it affects you. Also, let your manager know you are having the conversation.', user_name: 'n/a')
