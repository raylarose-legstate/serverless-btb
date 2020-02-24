import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public blogPosts = [
    {
      title: "Character Building in the Martial Arts",
      blurb: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well ...",
      content: `The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. Ralph Waldo Emerson

Warriors seek to show BENEVOLENCE each and every day: that is, to take care of those around us. By seeking to do what is fair and good for others, you will often find a happiness that cannot be brought about by anything else.

It may seem our focus on character building is irrelevant when it comes to bringing a child up to Black Belt level, however our belief is that in order to be a true Black Belt in any art, one must have a value system behind the skills they learn.

Someone who learns to fight without a value system can easily turn from being a warrior to a bully.

It is because of this that we have such a strong focus on making our students not simply good martial artists, but great leaders, in the hope that our future will be led by strong and benevolent men and women someday!`,
      headerImageUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/58d53f15c765a.jpg"
    },
    {
      title: "What Are Mat Chats?",
      blurb: "When your kids are in class, you'll see them sitting and listening to their instructor talking (sometimes for what seems like a while!) during a section of class.",
      content: `When your kids are in class, you'll see them sitting and listening to their instructor talking (sometimes for what seems like a while!) during a section of class.

These sit downs are called 'Mat Chats', and while it may look like simply a break from drilling, we believe these talks are one of the most important parts of class!

During Mat Chats, instructors will discuss topics ranging from street safety, self confidence, how to help others, showing respect, how to deal with bullies vs. strangers, and conflict resolution, just to name a few.

As we tell the kids, being a warrior is not just about punches and kicks, but about knowing why we do what we do, when to do it, and knowing how to demonstrate the character of a warrior.
If you can, ask your child about what was discussed in their classes as these talks are a huge part in their journey to black belt.

It is our goal to not simply teach your child to 'do martial arts', but to make them a leader of the future, equipped with not only the physical, but mental tools needed to make a difference in the world as they grow and mature!`,
        "headerImageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/58d53f90ddb6d.jpg"
    },
    {
      title: "Evaluation Preparation Materials",
      content: `<p><br></p><p><a href="https://www.youtube.com/channel/UCJTl1jsRHBzGlmwfzUApNHw" data-mce-href="https://www.youtube.com/channel/UCJTl1jsRHBzGlmwfzUApNHw">Beyond the Belt: Education Resources</a><br></p><p><br></p><h3>Advanced Techniques Quiz (Purple Belt &amp; Up): <a href="https://s3.amazonaws.com/aethercode-btbmartialarts/assets/WEBSITE+Advanced+Techniques+Quiz.pdf" target="_blank" data-mce-href="https://s3.amazonaws.com/aethercode-btbmartialarts/assets/WEBSITE+Advanced+Techniques+Quiz.pdf">click here</a></h3><h3>Beginner&nbsp;Techniques Quiz (White&nbsp;Belt &amp; Up): <a href="https://s3.amazonaws.com/aethercode-btbmartialarts/assets/WEBSITE+Beginner+Technique+Quiz.pdf" target="_blank" data-mce-href="https://s3.amazonaws.com/aethercode-btbmartialarts/assets/WEBSITE+Beginner+Technique+Quiz.pdf">click here</a></h3>`,
      blurb: `We are always looking for new ways to help students get ready for their evaluations.

For technique preparation, please head on over to our Education Resources videos, found at our Youtube Channel below!`,
        "headerImageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/5ae75ffdbfe47.jpg"
      
    },
  ];

  public programs = [
    {
      title: "Kids Martial Arts Leadership",
      content: `<p>At Beyond the Belt's Martial Arts Leadership Program, we go far beyond kicking and punching. We focus on character building, and school and street safety. Students learn practical martial arts and gain skills in an encouraging environment. We use goal setting as a key to the child’s success, and each student gets individual attention, gets challenged, and gets encouraged. <br><br>The course focuses around exercises, mat chats, and martial arts training.<br><br><strong><u>Exercise:</u></strong><br><br>Each child works on their physical goals for push-ups, crunches, and squats. The focus is on form and doing the exercise well (Habits we train are habits we gain!). Each student is encouraged to set their own goals and exceed them. <br><br><strong><u>Mat Chats</u></strong><br><br>Mat chats are inspirational talks given in each class. The 1st part of a mat chat is always about character development, including self discipline (doing what you know you're supposed to, even if you don't want to), positive attitudes (having a "whatever it takes attitude," an "attitude of gratitude", etc.), and more. The focus is on training the mind as well as the body.<br><br>The second part of a mat chat is around school safety and life skills. This includes the ABCs of conflict (how to Avoid, how to Be calm, and how to Communicate), stranger danger, and other street safety topics. Life skills are also imparted such as how to greet people, make friends, and have good interaction skills that breed confidence.<br><br><strong><u>Martial Arts Training:</u></strong><br><br>Each week consists of a different focus in a rotating curriculum to help maximize learning potential for each student.<br><br><strong>At a beginner level,</strong> students are learning basics such as punching, kicking techniques, basic defense, and bag work. During this phase, they are being taught how to work well with others , how to use their strengths to help others weaknesses, and above all, they are working on their ability to focus!<br><br>Once a student has graduated the beginner program, they move to the&nbsp;<strong>advanced classes</strong>. These classes teach ground defense, improved technique, and more advanced partner drills. Students are taught to hone their leadership skills and pursue martial arts with excellence.<br><br>The program is for kids ages 4-16 (4 and 5 year olds receive separate instruction). It is based on participation twice a week, but with multiple class times that fit your schedule. Classes are 45 minutes long. <br><br>We pride ourselves on providing a safe, welcoming, and encouraging environment and making a positive impact on young people through teaching martial arts.<br><br>Come join us! Give us a call at 366.1044 to schedule a personal tour of the facility and meet our staff. Come find out if this program could help your child build self confidence, gain new skills, and develop character.<br></p>`,
      blurb: "The program is for kids ages 4-16 (4 and 5 year olds receive separate instruction). It is based on participation twice a week, but with multiple class times that fit your schedule. Classes are 45 minutes long.",
      headerImageUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/56f474804c6a0.jpg"
    },
    {
      title: "Adult Mixed Martial Arts",
      content: `<p class="p1">Beyond the Belt's Adult Mixed Martial Arts is unlike any other mixed martial arts program. Discover technique and intense training with a traditional mindset of honor and respect! Learn practical martial arts skills, perfect technique, and discover what it truly means to be a black belt!<\/p><p class=\"p2\">Students are encouraged to make at least one Stand Up\/MMA class and one Grappling class per week. Each week has a set curriculum that is diverse in material, ranging from mitt work, ground and pound, kicking, punching, sparring, grappling, etc.<br><\/p><p class=\"p2\">We pride ourselves on providing a mixed martial arts training facility that is clean, safe, and centered about self betterment and teamwork in a world of often very\u0026nbsp;self centered martial arts practitioners.\u0026nbsp;<br><\/p><p class=\"p2\">Are you ready to achieve Black Belt level? Give us a call at 603.366.1044 today and find out more about how to enroll as a student with Beyond the Belt's Adult Mixed Martial Arts Program!<br></p>`,
      blurb: "Become belt ranked in our Adult Mixed Martial Arts Program! Learn mixed martial arts in a family friendly environment that encourages teamwork and core values in training. Get started TODAY!",
      headerImageUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/17/5633e3b4c6294.jpg"
    },
  ];

  public get year() {
    return new Date().getFullYear();
  }

  constructor() { }

  ngOnInit() {
  }

}
