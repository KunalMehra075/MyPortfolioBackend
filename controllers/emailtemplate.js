let ThankyouTemplate =
    `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Message Reply</title>
    <style>
      #mainbox > img {
        width: 100%;
      }
      #BigTextThanks {
        text-shadow: 2px 2px #ffd41f;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div id="mainbox">
      <img
        src="https://media.tenor.com/4CCjmzihmqsAAAAj/thank-you-cat.gif"
        alt=""
      />
      <center>
        <h1 id="BigTextThanks">Thanks for visiting my Portfolio</h1>
      </center>
      <center>
        <p>I have recieved your message, Will reply to you very soon!</p>
      </center>
      <div id="sociallinks">
        Follow me on -
        <a href="https://www.linkedin.com/in/kunal-mehra-thelifeofcoder/"
          >LinkedIN</a
        >
      </div>
    </div>
  </body>
</html>

`
module.exports = { ThankyouTemplate };