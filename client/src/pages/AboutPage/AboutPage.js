import React from "react"
import Hero from "../../components/Hero/Hero"
import "./AboutPage.scss"

const AboutPage = () => (
  <>
    <Hero title={"About Us"} />
    <div className="aboutMain">
      <div className="aboutMain__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem
          est, euismod sed nibh id, molestie elementum mauris. Duis accumsan
          malesuada elementum. Donec lectus elit, ultricies in augue nec,
          aliquet fringilla dolor. Suspendisse eu tincidunt eros. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Integer hendrerit mauris eu finibus convallis. Aenean
          congue facilisis ipsum sit amet interdum. Duis ante enim, malesuada
          eget commodo et, maximus vitae lectus. <br />
          <br />
          Nam semper leo non ultrices cursus. Curabitur mi ante, auctor nec
          tortor eu, ornare facilisis erat. Vivamus ac pellentesque nisl,
          bibendum ullamcorper mi. Etiam id nisl pellentesque, ultricies augue
          ut, tempor quam. Quisque faucibus vulputate dictum. Ut accumsan
          lobortis ullamcorper. Maecenas sed posuere nulla. Donec fermentum
          viverra dignissim. Proin sollicitudin, leo at rutrum imperdiet, massa
          dolor consectetur massa, id interdum massa sem non tortor. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Sed iaculis ante et augue tincidunt, eu sagittis velit
          sagittis. <br />
          <br />
          Nam dapibus, ante in pulvinar blandit, augue nunc tempor urna,
          pellentesque sagittis magna ex at erat. Morbi ultricies nisi vel felis
          lacinia egestas. In ligula ex, mattis eget mi sit amet, ornare
          scelerisque turpis. Aenean venenatis velit ut nisl ultrices luctus.
          Etiam tincidunt dictum ornare. Nunc convallis pellentesque diam ut
          rhoncus. In tempor cursus leo, sit amet laoreet nulla ultricies in.
          Donec sapien leo, ornare at tincidunt id, maximus ac nulla. Praesent a
          commodo elit. Donec a dui dolor. Quisque in enim elit. <br />
          <br />
          Aenean quis mi ipsum. Aliquam eget efficitur neque. In sit amet augue
          nisl. Sed nec sapien congue tellus vestibulum facilisis ac quis lacus.
          Curabitur elementum dolor at arcu malesuada aliquam. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vestibulum nec dui et arcu vestibulum tempus vel at sem.
          Donec sagittis lorem diam, placerat ultrices tortor cursus id. Nullam
          laoreet faucibus erat, in rhoncus libero laoreet id. Integer fringilla
          lectus id augue vulputate sagittis. Vestibulum at auctor tellus.
          Quisque maximus faucibus metus, ut laoreet odio accumsan dictum.
          <br />
          <br />
        </p>
      </div>
      <img
        className="aboutMain__pictures"
        src="https://picsum.photos/900"
        alt="AboutPic"
      ></img>
    </div>
  </>
)

export default AboutPage
