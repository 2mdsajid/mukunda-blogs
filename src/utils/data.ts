import { mongoNote } from "./types";

export const FRONTEND = 'http://localhost:3000'
export const BACKEND = 'http://localhost:3001'
// export const BACKEND = 'https://mukundaserver.adaptable.app'


export const dummyBlog = {
  isupdated: [Object],
  _id: '64806daf14ca99560c32a0f5',
  title: 'Microsoft One-Note: Digital Notetaking with Laptops',
  noteid: 'Microsoft-One-Note-Digital-Notetaking-with-Laptops',
  category: 'technology',
  subcategory: '',
  author: 'Aayushma',
  intro: 'Digital Notetaking with MS One-Note. Check out the blog to know the features, drawbacks and my personal experiences.\n' +
    'Upgrade your note taking journey today.',
  content: `<p><span style="font-family: helvetica, sans-serif; font-size: 18px;"> If you are searching for a cool notetaking app, you are on a right place. </span></p><p><span style="font-family: helvetica, sans-serif; background-color: rgb(255, 255, 255); font-size: 18px;">Spoiler Alert! </span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">It works wonders, if you have either one of these : Laptop, tablets, macbook, iphone or android phone!<br><span style="color: rgb(103, 78, 167);"><br></span><strong style="color: rgb(103, 78, 167);">From Pen and Paper to Digital</strong></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>Most of my friends in my medical school had the ipads which they used for notetaking. While I didn't have the privilege of owning one, I had the opportunity to take notes on an iPad and explore the features of GoodNotes. I relied on my trusty Dell inspiron series laptop which helped me through most of my school projects and beyond. <br><br>Not having a notetaking device that was so popular, made me think about the possibilities that digital notetaking unlocks for us.<br>Well, the classic pen and paper model is still my favorite. However,when it comes to organization, storage, and easy access, the old school way is quite challenging and little unproductive.<br><br><span style="color: rgb(103, 78, 167);"><strong>Beginning of the Digital Notetaking journey.</strong><br></span><br>I often wondered if laptops are equally helpful enough to create an aesthetic notes with embedded pictures and searchable options.  I had searched for answers to this question long ago, but I seriously lacked the time to explore all of them. </span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">On June, I actually created my first complete digital note on this amazing app called Microsoft OneNote, part of the Microsoft Suite.<br>My first digital note was very basic, with just few highlights and images, but it felt like a step in right direction. Here is a page.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><div classname="w-3/4 lg:w-1/2 mx-auto my-3 lg:my-5 drop-shadow-sm">\n` +
    '            <img src="https://uploadthing.com/f/9ff4cd2e-e927-485a-b723-b3bf42c1b7ea_pag_11zon.png" alt="">\n' +
    '            <div classname="text-center">\n' +
    '            <p><br></p>\n' +
    '            <p><u><em>Source:&nbsp; My first digital note with MS OneNote</em></u></p>\n' +
    '            </div>\n' +
    '            </div><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">Since then, I have explored Microsoft OneNote a lot.<br><br><br><strong style="color: rgb(103, 78, 167);">Features of Microsoft One Note.</strong><br><br>1. Available on Windows, Mac, iOS, and Android because of which you can access and sync your notes across all your devices.<br><br>2. With OneNote, you can create notebooks, sections, and pages to organize your notes in a way that makes sense to you and helps in easy retrieval of information.<br><br>3. You can insert images, videos, audio recordings, and even draw or write freehand with digital ink. <br><br>4. You can export your notebooks to your device as well as share them in form of one-note, pdf, word file and even a single-file webpage.</span></p><div classname="w-3/4 lg:w-1/2 mx-auto my-3 lg:my-5 drop-shadow-sm">\n' +
    `            <br></div><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"> 5. OneNote's search feature allows you to quickly find specific notes, pages, or sections within your notebooks when you type a keyword.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>6. It broadens your creativity of designing and ignites the artist within you. <br><br><strong style="color: rgb(103, 78, 167);">Drawbacks <br></strong><br>1. The notetaking process in laptop isn't as smooth and doesn't have much of the styling options as in an iPad(goodnote).</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>2. Although it gives you the option of handwriting, annotations and manual highlighting, it is not as effective. Admit it, there is no fineness with your handskills over the inbuilt-cursor of your laptop.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>3. It can be a little overwhelming and complex for new user. For a beginner, it requires twice the time and effort to create the same file.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>4. Unknown errors may pop-up, if you have any existing problem with your microsoft account.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><strong style="color: rgb(153, 0, 255);">How to download?</strong></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span><span style="font-family: helvetica, sans-serif; font-size: 18px;">Download Microsoft One-Note from the official website and sign in with your microsoft account to enjoy.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">Here is the <u><a href="https://www.onenote.com/download" target="_blank" style="color: rgb(0, 0, 255);">link.</a></u></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br><strong style="color: rgb(103, 78, 167);">My Personal Suggestion</strong><br>If you an avid note keepe looking for some budget-friendly note taking options, these can be a pretty good investments to beautify your journey with MS One-Note.<br><br>1. Consider investing in a stylus pen as it doesn't cost you much. The stylus pen offers a more natural writing experience.<br>2. You can also buy an external drawing tablet for more precise input.<br></span><br></p>`,
  introimage: 'https://uploadthing.com/f/82e7dc17-e38f-43f5-a11e-1fc0596e220d_note_11zon.jpg',
  review: false,
  published: true,
  keywords: 'laptop, iPad, notetaking, onenote, digital, notes, app',
  readtime: '4 min',
  upvote: [Array],
  downvote: [],
  views: 65,
  rating: 0,
  comments: [Array],
  date: '2023-06-07T11:44:47.950Z',
  __v: 8
}

export const dummyBlogData: mongoNote[] = [
  {
    _id: "1",
    title: "Example Note 1",
    noteid: "Microsoft-One-Note-Digital-Notetaking-with-Laptops",
    category: "Category 1",
    subcategory: "Subcategory 1",
    author: "Mukunda Raj Joshi",
    intro: 'Digital Notetaking with MS One-Note. Check out the blog to know the features, drawbacks and my personal experiences.\n' +
      'Upgrade your note taking journey today.',
    content: `<p><span style="font-family: helvetica, sans-serif; font-size: 18px;"> If you are searching for a cool notetaking app, you are on a right place. </span></p><p><span style="font-family: helvetica, sans-serif; background-color: rgb(255, 255, 255); font-size: 18px;">Spoiler Alert! </span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">It works wonders, if you have either one of these : Laptop, tablets, macbook, iphone or android phone!<br><span style="color: rgb(103, 78, 167);"><br></span><strong style="color: rgb(103, 78, 167);">From Pen and Paper to Digital</strong></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>Most of my friends in my medical school had the ipads which they used for notetaking. While I didn't have the privilege of owning one, I had the opportunity to take notes on an iPad and explore the features of GoodNotes. I relied on my trusty Dell inspiron series laptop which helped me through most of my school projects and beyond. <br><br>Not having a notetaking device that was so popular, made me think about the possibilities that digital notetaking unlocks for us.<br>Well, the classic pen and paper model is still my favorite. However,when it comes to organization, storage, and easy access, the old school way is quite challenging and little unproductive.<br><br><span style="color: rgb(103, 78, 167);"><strong>Beginning of the Digital Notetaking journey.</strong><br></span><br>I often wondered if laptops are equally helpful enough to create an aesthetic notes with embedded pictures and searchable options.  I had searched for answers to this question long ago, but I seriously lacked the time to explore all of them. </span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">On June, I actually created my first complete digital note on this amazing app called Microsoft OneNote, part of the Microsoft Suite.<br>My first digital note was very basic, with just few highlights and images, but it felt like a step in right direction. Here is a page.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><div classname="w-3/4 lg:w-1/2 mx-auto my-3 lg:my-5 drop-shadow-sm">\n` +
      '            <img src="https://uploadthing.com/f/9ff4cd2e-e927-485a-b723-b3bf42c1b7ea_pag_11zon.png" alt="">\n' +
      '            <div classname="text-center">\n' +
      '            <p><br></p>\n' +
      '            <p><u><em>Source:&nbsp; My first digital note with MS OneNote</em></u></p>\n' +
      '            </div>\n' +
      '            </div><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">Since then, I have explored Microsoft OneNote a lot.<br><br><br><strong style="color: rgb(103, 78, 167);">Features of Microsoft One Note.</strong><br><br>1. Available on Windows, Mac, iOS, and Android because of which you can access and sync your notes across all your devices.<br><br>2. With OneNote, you can create notebooks, sections, and pages to organize your notes in a way that makes sense to you and helps in easy retrieval of information.<br><br>3. You can insert images, videos, audio recordings, and even draw or write freehand with digital ink. <br><br>4. You can export your notebooks to your device as well as share them in form of one-note, pdf, word file and even a single-file webpage.</span></p><div classname="w-3/4 lg:w-1/2 mx-auto my-3 lg:my-5 drop-shadow-sm">\n' +
      `            <br></div><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"> 5. OneNote's search feature allows you to quickly find specific notes, pages, or sections within your notebooks when you type a keyword.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>6. It broadens your creativity of designing and ignites the artist within you. <br><br><strong style="color: rgb(103, 78, 167);">Drawbacks <br></strong><br>1. The notetaking process in laptop isn't as smooth and doesn't have much of the styling options as in an iPad(goodnote).</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>2. Although it gives you the option of handwriting, annotations and manual highlighting, it is not as effective. Admit it, there is no fineness with your handskills over the inbuilt-cursor of your laptop.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>3. It can be a little overwhelming and complex for new user. For a beginner, it requires twice the time and effort to create the same file.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>4. Unknown errors may pop-up, if you have any existing problem with your microsoft account.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><strong style="color: rgb(153, 0, 255);">How to download?</strong></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span><span style="font-family: helvetica, sans-serif; font-size: 18px;">Download Microsoft One-Note from the official website and sign in with your microsoft account to enjoy.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">Here is the <u><a href="https://www.onenote.com/download" target="_blank" style="color: rgb(0, 0, 255);">link.</a></u></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br><strong style="color: rgb(103, 78, 167);">My Personal Suggestion</strong><br>If you an avid note keepe looking for some budget-friendly note taking options, these can be a pretty good investments to beautify your journey with MS One-Note.<br><br>1. Consider investing in a stylus pen as it doesn't cost you much. The stylus pen offers a more natural writing experience.<br>2. You can also buy an external drawing tablet for more precise input.<br></span><br></p>`,
    introimage: 'https://uploadthing.com/f/82e7dc17-e38f-43f5-a11e-1fc0596e220d_note_11zon.jpg',
    review: true,
    published: true,
    keywords: "keyword1, keyword2, keyword3",
    readtime: "5 min",
    upvote: ["user1", "user2", "b96271cb-af79-4c12-b232-83ddcbba6ca5"],
    downvote: ["user3"],
    isupdated: {
      state: true,
      date: new Date(),
    },
    comments: [
      {
        _id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        comment: 'This is a great article!',
        likes: ['user1', 'user2'], // Assuming 'user1' and 'user2' are unique ids of users who liked this comment
        replies: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            reply: 'I agree, it is really helpful!',
            likes: ['user3', 'user4'], // Assuming 'user3' and 'user4' are unique ids of users who liked this reply // You can add nested replies here if needed
          },
        ],
      },
      {
        _id: '2',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        comment: 'Thanks for sharing this!',
        likes: ['user5'], // Assuming 'user5' is a unique id of a user who liked this comment
        replies: [],
      },
      // Add more dummy comments here if needed
    ],
    date: new Date(),
    views: 100,
    rating: 4.5,
  },
  {
    _id: "2",
    title: "Example Note 2",
    noteid: "note2",
    category: "Category 2",
    intro: 'Digital Notetaking with MS One-Note. Check out the blog to know the features, drawbacks and my personal experiences.\n' +
      'Upgrade your note taking journey today.',
    content: `<p><span style="font-family: helvetica, sans-serif; font-size: 18px;"> If you are searching for a cool notetaking app, you are on a right place. </span></p><p><span style="font-family: helvetica, sans-serif; background-color: rgb(255, 255, 255); font-size: 18px;">Spoiler Alert! </span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">It works wonders, if you have either one of these : Laptop, tablets, macbook, iphone or android phone!<br><span style="color: rgb(103, 78, 167);"><br></span><strong style="color: rgb(103, 78, 167);">From Pen and Paper to Digital</strong></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>Most of my friends in my medical school had the ipads which they used for notetaking. While I didn't have the privilege of owning one, I had the opportunity to take notes on an iPad and explore the features of GoodNotes. I relied on my trusty Dell inspiron series laptop which helped me through most of my school projects and beyond. <br><br>Not having a notetaking device that was so popular, made me think about the possibilities that digital notetaking unlocks for us.<br>Well, the classic pen and paper model is still my favorite. However,when it comes to organization, storage, and easy access, the old school way is quite challenging and little unproductive.<br><br><span style="color: rgb(103, 78, 167);"><strong>Beginning of the Digital Notetaking journey.</strong><br></span><br>I often wondered if laptops are equally helpful enough to create an aesthetic notes with embedded pictures and searchable options.  I had searched for answers to this question long ago, but I seriously lacked the time to explore all of them. </span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">On June, I actually created my first complete digital note on this amazing app called Microsoft OneNote, part of the Microsoft Suite.<br>My first digital note was very basic, with just few highlights and images, but it felt like a step in right direction. Here is a page.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><div classname="w-3/4 lg:w-1/2 mx-auto my-3 lg:my-5 drop-shadow-sm">\n` +
      '            <img src="https://uploadthing.com/f/9ff4cd2e-e927-485a-b723-b3bf42c1b7ea_pag_11zon.png" alt="">\n' +
      '            <div classname="text-center">\n' +
      '            <p><br></p>\n' +
      '            <p><u><em>Source:&nbsp; My first digital note with MS OneNote</em></u></p>\n' +
      '            </div>\n' +
      '            </div><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">Since then, I have explored Microsoft OneNote a lot.<br><br><br><strong style="color: rgb(103, 78, 167);">Features of Microsoft One Note.</strong><br><br>1. Available on Windows, Mac, iOS, and Android because of which you can access and sync your notes across all your devices.<br><br>2. With OneNote, you can create notebooks, sections, and pages to organize your notes in a way that makes sense to you and helps in easy retrieval of information.<br><br>3. You can insert images, videos, audio recordings, and even draw or write freehand with digital ink. <br><br>4. You can export your notebooks to your device as well as share them in form of one-note, pdf, word file and even a single-file webpage.</span></p><div classname="w-3/4 lg:w-1/2 mx-auto my-3 lg:my-5 drop-shadow-sm">\n' +
      `            <br></div><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"> 5. OneNote's search feature allows you to quickly find specific notes, pages, or sections within your notebooks when you type a keyword.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>6. It broadens your creativity of designing and ignites the artist within you. <br><br><strong style="color: rgb(103, 78, 167);">Drawbacks <br></strong><br>1. The notetaking process in laptop isn't as smooth and doesn't have much of the styling options as in an iPad(goodnote).</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>2. Although it gives you the option of handwriting, annotations and manual highlighting, it is not as effective. Admit it, there is no fineness with your handskills over the inbuilt-cursor of your laptop.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>3. It can be a little overwhelming and complex for new user. For a beginner, it requires twice the time and effort to create the same file.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br>4. Unknown errors may pop-up, if you have any existing problem with your microsoft account.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><strong style="color: rgb(153, 0, 255);">How to download?</strong></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br></span><span style="font-family: helvetica, sans-serif; font-size: 18px;">Download Microsoft One-Note from the official website and sign in with your microsoft account to enjoy.</span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;">Here is the <u><a href="https://www.onenote.com/download" target="_blank" style="color: rgb(0, 0, 255);">link.</a></u></span></p><p><span style="font-family: helvetica, sans-serif; font-size: 18px;"><br><strong style="color: rgb(103, 78, 167);">My Personal Suggestion</strong><br>If you an avid note keepe looking for some budget-friendly note taking options, these can be a pretty good investments to beautify your journey with MS One-Note.<br><br>1. Consider investing in a stylus pen as it doesn't cost you much. The stylus pen offers a more natural writing experience.<br>2. You can also buy an external drawing tablet for more precise input.<br></span><br></p>`,
    introimage: 'https://uploadthing.com/f/82e7dc17-e38f-43f5-a11e-1fc0596e220d_note_11zon.jpg',
    readtime: "10 min",
    upvote: ["user1", "user2", "user3"],
    downvote: [],
    isupdated: {
      state: false,
      date: new Date(),
    },
    date: new Date(),
    views: 50,
    rating: 3.8,
  },
];

export const dummyBlogs = [dummyBlog]