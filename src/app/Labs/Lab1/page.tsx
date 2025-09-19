"use client";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      {/* beginning of Lab 1 */}
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      {/* Large chunk of text */}
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags. The
        font of the section headings are usually larger and bolder than their
        subsection headings. This document uses headings to introduce topics
        such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags
        can be used to format plain text so that it renders in a browser as
        large headings. There are 6 heading tags for different sizes: h1, h2,
        h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest
        heading.
      </div>
      {/* How to make it into paragraph */}
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is a paragraph. We often separate a long set of sentences with
          vertical spaces to make the text easier to read. Browsers ignore
          vertical white spaces and render all the text as one single set of
          sentences. To force the browser to add vertical spacing, wrap the
          paragraphs you want to separate with the paragraph tag{" "}
        </p>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>
      {/* A ordered list with numbers */}
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
        My favorite recipe:
        <ol>
          <li>
            Cut tofu, potato into small cubes, cut green bean into small short
            pieces.
          </li>
          <li>
            Cut white mushroom into thin slices, randomly cut tomato into small
            chunks, sock dried black mushroom in the hot water.
          </li>
          <li>
            Pour some oil into your pot, when oil gets hot, put tofu, potato and
            green bean into the pot.
          </li>
          <li>
            Stir the vegetables in the pot, add a drizzle of soy sause and some
            salt after a while.
          </li>
          <li>
            Stir those vegatables again, after a short while, put mushrooms and
            tomato into the pot.
          </li>
          <li>
            Add minced pork, add some five spice powder, and a little bit soy
            sauce.
          </li>
          <li>
            Stir again. After a short while, add some water, and turn the stove
            into small fire, wait for 10 minutes.
          </li>
          <li>
            When potato and green bean being cocked throughoutly, get them out.
          </li>
          <li>
            Now you know how to cook my favorite Shaanxi food: &quot;Ma Shi
            Cai&quot; (麻食菜).
          </li>
        </ol>
        {/* A unordered list with numbers */}
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender&apos;s Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
        Your favorite books (in no particular order)
        <ul id="wd-your-books">
          I don&apos;t read books, sorry. When I was young, I read a lot of
          chinese books, such as Romance of the Three-Kindoms and Journey to the
          West, and many historical books about the war around the world, or
          about China&apos;s history. But after I growing up, I only read
          boy&apos;s love novels hahahahahahahhaha... So if you ask me to list
          my favorite books? I can only suggest some BL novels, that&apos;s all
          I have ^^
          <li>AWM</li>
          <li>全球高考(The Global College Entrance Exam)</li>
          <li>不见上仙三百年(Haven&apos;t Seen Dear You for 300 Years)</li>
          <li>判官(The Arbiter)</li>
          <li>御者(The Charioteer)</li>
          <li>
            铜钱龛世(I don&apos;t even understand what does this mean in
            Chinese, so..)
          </li>
          <li>
            我喜欢你男朋友很久了(I&apos;ve Loved Your Boyfriend for a Long Time
            time)
          </li>
        </ul>
      </div>
      {/* A table with columns and rows */}
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>TypeScript</td>
              <td>2/17/21</td>
              <td>75</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>JavaScript</td>
              <td>2/24/21</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Booststrap</td>
              <td>3/3/21</td>
              <td>80</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Chinese</td>
              <td>3/10/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>English</td>
              <td>3/17/21</td>
              <td>23</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>Korean</td>
              <td>3/24/21</td>
              <td>63</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Japanese</td>
              <td>4/1/21</td>
              <td>48</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>WebDev</td>
              <td>4/8/21</td>
              <td>0</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>65.8</td>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* Pictures */}
      <div id="wd-images">
        {/* Pictures from internet */}
        <h4>Image tag</h4>
        Loading an image from the internet: <br />
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        {/* Pictures from local */}
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="/images/IMG_6525.jpg" height="200px" />
      </div>
      {/* Text fields, can be filled out */}
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            defaultValue="123@#$asd"
            id="wd-text-fields-password"
          />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" title="John" id="wd-text-fields-first-name" />{" "}
          <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input
            type="text"
            placeholder="Doe"
            defaultValue="Wonderland"
            title="The last name"
            id="wd-text-fields-last-name"
          />
          {/* Text box, like the steam profile customize chatbox thing */}
          <h5>Text boxes</h5>
          <label>Biography:</label>
          <br />
          <textarea id="wd-textarea" cols={30} rows={10}>
            Integer et mollis purus. Praesent non consequat nisi, eget consequat
            sem. Integer ac sem vestibulum, iaculis nisi eu, vehicula tellus.
            Praesent ac pulvinar quam. Pellentesque molestie neque ut justo
            malesuada, eu interdum dolor consequat. In eu cursus est. In nisi
            lectus, consectetur id hendrerit ac, interdum id lacus. Nam ornare
            varius pharetra. Nam finibus, eros nec efficitur lobortis, urna ex
            facilisis ligula, vel feugiat diam lacus posuere leo. Vestibulum
            quam odio, tempor ut vestibulum nec, accumsan id diam. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vestibulum nec urna eget nulla sollicitudin blandit.
            Morbi laoreet gravida nunc in pharetra
          </textarea>
        </form>
      </div>
      {/* A button with interaction (alert) */}
      <div id="wd-buttons">
        <h5>Buttons</h5>
        <button
          type="button"
          onClick={() => alert("Life is Good!")}
          id="wd-all-good"
        >
          Hello World!
        </button>
      </div>
      {/* Selective buttons */}
      <h5 id="wd-radio-buttons">Radio buttons</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-comedy" />
      <label htmlFor="wd-radio-comedy">Comedy</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-drama" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-scifi" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>
      {/* Multichoice buttons (checkboxes) */}
      <h5 id="wd-checkboxes">Checkboxes</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
      <label htmlFor="wd-chkbox-comedy">Comedy</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
      <label htmlFor="wd-chkbox-drama">Drama</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
      <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
      <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
      {/* Dropdown menu */}
      <h4 id="wd-dropdowns">Dropdowns</h4>
      <h5>Select one</h5>
      <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label>
      <br />
      <select id="wd-select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option defaultValue="SCIFI">Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
      </select>
      {/* Selection menu (press and move to select many?) */}
      <h5>Select many</h5>
      <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
      <br />
      <select multiple id="wd-select-many-genre">
        <option value="COMEDY" selected>
          Comedy
        </option>
        <option value="DRAMA"> Drama </option>
        <option value="SCIFI" selected>
          Science Fiction
        </option>
        <option value="FANTASY"> Fantasy </option>
      </select>
      {/* Other fields */}
      <h4>Other HTML field types</h4>
      {/* This will let the broswer auto suggest saved email information */}
      <label htmlFor="wd-text-fields-email"> Email: </label>
      <input
        type="email"
        placeholder="jdoe@somewhere.com"
        id="wd-text-fields-email"
      />
      <br />
      {/* This have the up and down button for increasing and decresing number */}
      <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
      <input
        type="number"
        defaultValue="100000"
        placeholder="1000"
        id="wd-text-fields-salary-start"
      />
      <br />
      {/* This is a slider bar */}
      <label htmlFor="wd-text-fields-rating"> Rating: </label>
      <input
        type="range"
        defaultValue="4"
        max="5"
        placeholder="Doe"
        id="wd-text-fields-rating"
      />
      <br />
      {/* This can let you select date / month / year */}
      <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
      <input type="date" defaultValue="2000-01-21" id="wd-text-fields-dob" />
      <br />
      {/* This makes a hyperlink to other places */}
      <h4>Anchor tag</h4>
      Please
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>
      to get dummy text
      <br />
      {/* This is anchor to github? */}
      <a
        href="https://github.com/LiuZhenz701/SpotifyDesktopLyrics"
        id="wd-github"
      >
        github account
      </a>
    </div>
  );
}
