import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Page from '../../layouts/Page';
import Post from '../../components/Post/Post';
import Age from '../../components/Age/Age';

function useWordCount(id: string) {
  const [words, setWords] = useState(0);

  useEffect(() => {
    const content = document.getElementById(id);
    const count = content?.innerText.match(/[^\s]+/g)?.length;

    setWords(count !== undefined ? count : 0);
  }, [id]);

  return { words };
}

export default function About() {
  const { words } = useWordCount('about-content');

  return (
    <Page title="" description="">
      {/* <PageHeader /> */}
      <Page.Header>
        <h2 className="h2">
          <Link to="/about" className="link">
            About Me
          </Link>
        </h2>
        <p>(in about {words} words)</p>
      </Page.Header>
      <div id="about-content">
        <Post>
          <Post.Section>
            <Post.SectionHeader>
              <h3 className="h3">
                <a href="#asdasd" className="link">
                  Intro123
                </a>
              </h3>
            </Post.SectionHeader>

            <Post.Body>
              <p>
                I&apos;m about <Age /> years old from Israel.
                <br />
                Unlike most of the people i know, I didn&apos;t have a
                connection to computers at young age.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione molestiae inventore tempore reiciendis, aliquam, tenetur
                quas consectetur enim illum facilis autem expedita perspiciatis
                cupiditate saepe labore officia, repudiandae ex quaerat
                architecto. Quas, amet nam, molestias eligendi corporis
                explicabo reiciendis eaque ipsam nemo est sed fuga itaque illo
                mollitia iusto exercitationem, nobis tempora inventore? Eveniet,
                explicabo assumenda adipisci commodi architecto necessitatibus
                suscipit iste voluptates consequatur? Vitae fugit cumque eos
                assumenda quod perspiciatis aliquid perferendis, suscipit iure!
                Eveniet atque sequi, incidunt corrupti ea exercitationem omnis
                nam minus. Enim est ullam culpa ducimus officia ipsum
                praesentium, iure a molestias, voluptate nam iusto illo ratione,
                voluptas blanditiis dolore itaque quasi fugiat! Velit incidunt
                fugit placeat dolores consectetur libero sit at repellat
                possimus accusantium delectus consequatur nesciunt magni, esse
                minus beatae inventore, facere sequi autem repudiandae quasi
                similique? Facere aspernatur delectus illo quo accusantium atque
                eum facilis temporibus omnis corrupti mollitia velit assumenda
                labore error veniam voluptatibus quam inventore, vero nulla
                debitis. Quis, quisquam laboriosam! Autem nostrum atque quas
                officiis nulla aut necessitatibus vel eius! Facere hic velit ea
                quidem cum esse! Eaque veniam reiciendis autem commodi quibusdam
                exercitationem quae consectetur quidem sequi debitis, et
                voluptatibus velit maiores doloribus asperiores qui nemo
                suscipit tenetur numquam explicabo doloremque sint eius
                molestias. Officia repellat ipsam, quam, placeat explicabo
                recusandae tenetur, illo cumque tempora ducimus nemo.
                Repudiandae fugiat ea adipisci pariatur maiores, amet molestiae
                beatae maxime quia a eos aperiam inventore eaque, obcaecati
                dignissimos nulla nemo voluptatem illo aut perferendis sed modi
                quidem. Ullam architecto eligendi, facilis ab odio aliquam
                voluptate ea praesentium, animi quas placeat ipsum facere
                blanditiis! Porro unde dolore commodi molestias, laboriosam
                saepe! Distinctio ipsum officiis eaque sunt error vero quisquam
                laboriosam tempore praesentium, ea corrupti repellendus, ipsam
                cupiditate! Vero nulla laborum neque nobis! Nulla voluptas unde
                sit eaque. Exercitationem molestias velit sed quod harum.
              </p>
            </Post.Body>
          </Post.Section>
          {/* <Post.SectionDivider /> */}
          <Post.Section id="asdasd" divider="both">
            <Post.SectionHeader>
              <h3 className="h3">Intro123</h3>
            </Post.SectionHeader>

            <Post.Body>
              <p>
                I&apos;m about <Age /> years old from Israel.
                <br />
                Unlike most of the people i know, I didn&apos;t have a
                connection to computers at young age.
              </p>
            </Post.Body>
          </Post.Section>
        </Post>
      </div>
    </Page>
  );
}
