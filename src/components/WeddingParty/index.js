import React from 'react'
import styles from './index.module.scss'
import Link from 'gatsby-link'

const groups = {
  "Bridesmaids": {
    "Kate Kingen": {
      "picture": "images/wedding-party/kate.jpg",
      "title": "Matron of Honor",
      "relationship": "Friend, High School",
      "description": `Katy (Kate) and Carolyn have been friends since Freshman year at Seattle Prep High School. Although Katy missed their first opportunity to meet (ask her or her mother Kathy for the story), they have been best friends every since. Since this day, Katy and Carolyn have leaned on each other through the sometimes trying year of high school, career pivots and relationships come-and-gone (and here to stay!). From yearly Vancouver trips with the Kingens, to Carolyn white-knuckling black diamond runs with Katy at Whistler, to trips across the country to see each other wherever life landed (New York, Boston, Los Angeles, San Francisco), their self-proclaimed alias of "Lucy and Ethel" fits just right: a friendship that embraces differences, is unavoidably honest, celebrates quirks, and is full of unwavering love.`,
    },
    "Lindsay Kinder": {
      "picture": "images/wedding-party/lindsay.jpg",
      "title": "Bridesmaid",
      "relationship": "Friend, High School",
      "description": `If you've heard the saying "I've found my weirdo", that just about sums up why Carolyn is so grateful to have met Lindsay (AKA Kinder). Carolyn and Lindsay commonly joke (half-serious) that they would be happy just "sitting in a closet" together - 100% content just being together, talking for hours, and likely sharing a bottle of wine. From their days at Seattle Prep to life in San Francisco, life together has been full of sweat pants, belly-laughs, and a weirdness that only the two of them will ever fully know (you better believe it's not coming out in public!).  Once 3rd place double tennis partners, Lindsay and Carolyn cheer for each other on and off the court, with a mutual encouragement to shoot for the moon in life and in love.`,
    },
    "Cami Hall": {
      "picture": "images/wedding-party/cami.jpg",
      "title": "Bridesmaid",
      "relationship": "Friend, College",
      "description": `Cami and Carolyn met Freshman year at University of Washington, both pledging into the Kappa Kappa Gamma sorority. For Carolyn, meeting someone like Cami gave her hope that she could, in fact, fit into "Greek life". This grounding nature has been a gift that Cami has given Carolyn ever since. Whether it be her spiritual strength, pursuit of a career with purpose, dedication as a friend and wife, or graceful (yet refreshingly honest) role as a mother, Cami is someone that Carolyn is both grounded and inspired by. From frat parties and sleeping porches to volunteer trips and 1st birthday parties, Carolyn counts her blessings daily for the greatest sister and friend she could as for!`,
    },
    "Della Tall": {
      "picture": "images/wedding-party/della.jpg",
      "title": "Bridesmaid",
      "relationship": "Friend, Middle School",
      "description": `Not many people have their "Della"; Carolyn is one of the lucky ones who does. Carolyn and Della have been friends for the past 18 years (meeting at Forest Ridge Middle School) - and have been friends ever since. Together, Carolyn and Della have experienced many firsts and some lasts, both landline and cell phone converstations (one thing both modalities shared: they can be hours long), ups and downs, rules and rule-breaking, pool parties and college parties and sips of keg beer and wine. There is no question too deep, no mountain too high, no dream too obscure, no valley too low for these two to conquer togther.  A friendship that doesn't need to be explained nor proven, the duration and depth of Carolyn and Della's friendship is unmatched.`,
    },
    "Mary Kate Thayer": {
      "picture": "images/wedding-party/mk.jpg",
      "title": "Bridesmaid",
      "relationship": "Sister-In-Law",
      "description": `Carolyn's brother ("Irish Twin") Lew has known Mary Kate (MK) for longer than Carolyn has - they were high school sweathearts, have lived cross-country from each other, and are now (this coming May) celebrating 3 years of marriage. The perseverence, loyalty and patience that this type of love story requires deserves nothing more than respect and love - and Carolyn has a lot of both for Mary Kate.\n\nBoth growing up with brothers, Mary Kate has made it easy to have a sister in the Thayer family. Although Carolyn will never be able to compete with MK's baking skills, Carolyn is so excited to share family and life moments (plus plenty of good wine and home-baked pies with Mary Kate for decades to come.`,
    },
    "Camille Geddes": {
      "picture": "images/wedding-party/camille.jpg",
      "title": "Bridesmaid",
      "relationship": "Friend, San Francisco",
      "description": `As a San Francisco transplant, Carolyn breathed a sense of relief and gratitude when Katy introduced her to Camille about 6 years ago. From the start, Camille's authentic demeaner and "no drama" approach bred a connection that has only grown. Camille, her husband Brad, and their french bulldog Duke's (AKA Dukie) San Francisco apartment has become a "home base" for Carolyn in San Francisco. While Brad and Jonathan go to electronic concerts, Carolyn and Camille share wine, pizza and a movie. In their adventures together outside of "The City" (Germany, concrete camping, Palm Springs and Lake Tahoe, to name a few), Camille goes with the flow (Carolyn can learn a thing-or-two from her) and makes the most of everything. It is safe to say that Carolyn's sanity while walking down the aisle on May 27 and all of the life milestones to follow will be supported by many Crissy Field walks, off-the-cusp text threads, and Camille as a rock!`,
    }
  },
  "Groomsmen": {
    "Adam Azoff": {
      "picture": "images/wedding-party/adam.jpg",
      "title": "Best Man",
      "relationship": "Brother",
      "description": "Jonathan’s younger - and only - brother, Adam lives on the opposite coast, in a swamp. Adam is often mischaracterized as the older-looking brother, likely due to his advanced facial hair and geriatric demeanor. Adam started his early life as a devout Rastafarian, preaching peace, love, and munchie food. Adam always followed his heart, and ended up getting his Masters from the University of Tel Aviv, mastering Falafel-science. He taught Jonathan everything he knows about Russian folk guitar, which he learned during his stint in Ukraine as a cherry pie maker. These days, Adam makes a modest living selling bootlegged copies of Google software to medium-sized companies. Having always been the “nerd” of the family, Adam struggled in social situations. Thankfully, after much coaching from his benevolent and extremely popular older brother, Adam worked up the courage to stand by his side, as his best man. Jonathan couldn’t be more proud of the man he’s become.",
    },
    "Alvin Rodriguez": {
      "picture": "images/wedding-party/alvin.jpg",
      "title": "Groomsman",
      "relationship": "Friend, Middle School",
      "description": `Albin - who also goes by Alvin - and Jonathan’s history together started in 1998. Jonathan, having been fortunate enough to receive early access to the internet, entrusted his AOL username and password with his new friend Alvin. This gave Alvin a window into the world wide web, and it was there that Alvin purchased his first bike. Oddly, it took five years for Alvin to actually receive his bike, as he must have selected a very slow shipping option. In the mean time, Alvin focused his energy on backyard wrestling, modeling himself after his hero, Duane "The Rock" Johnson. After a brief stint on the amateur wrestling circuit, Alvin took up baseball, where he was joined once again by Jonathan. In baseball, Alvin found his true passion. Known for preferring his bare hands to stop line drives, he earned the moniker “The Great Balvbino” - a name which remains to this day. Alvin made the leap from little league directly to Division 2 baseball, where he’s thrived for the past 40 years. Even though Alvin lives the life of a star athlete, he still finds time to spare for Jonathan. Jonathan couldn’t be so excited to share this day with his oldest friend.`,
    },
    "Ben Cherry": {
      "picture": "images/wedding-party/ben.jpg",
      "title": "Groomsman",
      "relationship": "Friend, College",
      "description": "Jonathan first got to know Ben in college, where they immediately bonded over the speakeasy Ben ran out of his dorm room. Ben, the perennial over-achiever, never settled for second best - a characteristic that Jonathan would learn followed him throughout his entire life. Even as a young man in the Boy Scouts, Ben taught classes in astrology, greek mythology, and calculator programming. He was known to have a photographic memory, taking 1st in the Santa Cruz County Public Spelling Bee for 15 years straight, 10 years after he disqualified due to age restrictions. After college, Ben and Jonathan briefly tried to live together in the Presidio neighborhood of San Francisco. Unfortunately, due to their proximity to the nudist colony on Baker Beach, the young men could not agree on who got the window room, and they ultimately parted ways. Thankfully, they kept in touch, and Jonathan learned of Ben’s budding affections for a young Italian woman he met in the forest. Over time, their affection grew stronger, until Ben - still the first at everything - decided to get married… first. Ben asked Jonathan to be by his side at his wedding, a fact that Jonathan would not soon forget. Mostly out of guilt, Jon reciprocated, and asked Ben to be by his side at his wedding. Only time will tell if Ben will be the first to the dance floor.",
    },
    "Daniel Wallman": {
      "picture": "images/wedding-party/daniel.jpg",
      "title": "Groomsman",
      "relationship": "First Cousin",
      "description": "Daniel is Jonathan’s first cousin, on his dad’s side. These two have spent their lives together, dressing up in traditional Moroccan man-dresses (also known as Jalabias) for decades. The Wallman/Azoff clan has enjoyed a storied history of vocational roles, but Daniel was the first to graduate from the school of engineering. Being the first engineer in the family, he went to join the young, fast-paced, and dynamic culture at Boeing. There he worked with a lot of like-minded, young and scrappy builders to lead the design of Boeing’s first self-flying car. After Daniel ran out of industries to disrupt, he went back to into the ivory towers of academia, attending a modest technology school in East Cambridge. There, he was inspired to dream big, and started his own virtual widget company, which he still operates today during his breaks from building Amazon Prime Space Ships. These days, Jonathan sees Daniel whenever he’s rolling through Kent, WA. They often talk business and existential crises, not necessarily in that order. Daniel is family in the truest sense of the word, and Jonathan couldn’t imagine getting married without him by his side.",
    },
    "Lew Thayer": {
      "picture": "images/wedding-party/lew.jpg",
      "title": "Groomsman",
      "relationship": "Brother of The Bride",
      "description": "James, who’s name is Lew (apparently), is Carolyn’s younger, Irish twin. Jonathan first met Lew at the pinnacle of his career, as a CPA working for Deloitte. Jonathan and Lew enjoyed a round of golf at some rocky shore in California, where Jonathan was lucky enough to witness Lew’s perfect shot on the 18th hole. Granted, the pacific ocean wasn’t exactly the “ideal” green, but boy did that ball fly! These days, Lew lives like a modern caveman, eating nothing but sous vide steaks and unpasteurized milk. This diet helped him compete in his first Iron Man, which he managed to finish with at least one leg still in tact. Lew is a walking lesson in humility and perseverance, with such lessons as “how one maintains an ornament for two decades”. Jonathan couldn’t be happier to become bros, and learn his secret frat handshake, of course.",
    },
    "Hank Thayer": {
      "picture": "images/wedding-party/hank.jpg",
      "title": "Groomsman",
      "relationship": "Brother of The Bride",
      "description": "John Jr., or Hank as he’s commonly known, is Carolyn’s youngest brother. Jonathan first met Hank on a pirate ship somewhere in Richardson’s Bay, near San Francisco. At the time, Hank was doing a stint in Seattle for college. However, shortly after his finals, he took up a job reading children’s books to middle-aged men. From there, Hank went on a spirit quest to his ancestral home of Newark, New Jersey, where he learned how to fish and craft cold brew coffee. Once his spiritual journey was complete, he applied to medical school and - just as the prophets predicted - he was received into the School of Medicine at Washington State University (Go Cougs!). Jonathan loves spending time with Hank, especially when he gets to mentor him in the finer points of virtual ping pong video games. Jonathan was pleased to hear that Hank would stand by his side during the wedding, despite the fact that he had been unable to beat him at ping pong video games for several years.",
    },
  }
}

class WeddingParty extends React.Component {

  entries = obj => Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))

  renderPerson = ([name, { relationship, picture, title, description }], i) => (
    <li key={`wedding-person-${i}`} className={styles.weddingPartyPerson}>
      <h4>{name}</h4>
      <h5>{title}<br/><small>{relationship}</small></h5>
      <p><img alt={`${name}'s Picture`} src={require(`../../${picture}`)} />{description}</p>
    </li>
  )

  renderGroup = ([name, group], i) => (
    <div key={`wedding-group-${i}`} className={styles.weddingPartyGroup}>
      <h3>{name}</h3>
      <ul>{this.entries(group).map(this.renderPerson)}</ul>
    </div>
  )

  renderGroups = () => this.entries(groups).map(this.renderGroup)

  render() {
    return (
      <div className={styles.weddingParty}>
      	{this.renderGroups()}
      </div>
    )
  }

}

export default WeddingParty