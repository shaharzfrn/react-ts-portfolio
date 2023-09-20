import { Link } from 'react-router-dom';
import Section from '../components/Section/Section';
import Page from '../layouts/Page';

export default function Home() {
  return (
    <Page title="Home" description="Home Page">
      <Page.Title>
        <Link to="/">About this site</Link>A BEAUTIFUL, RESPONSIVE,
        STATICALLY-GENERATED, REACT APPLICATION WRITTEN WITH MODERN JAVASCRIPT.
      </Page.Title>
      <Page.Body>
        <Section>
          <p>Welcome to my website.</p>
          <p>
            Please feel free to read more <Link to="/about">about me</Link>, you
            can check out my <Link to="/resume">resume</Link> or contact me.
          </p>
          <p className="padding-block-start-4">
            Source available{' '}
            <a
              target="_blank"
              href="https://github.com/shaharzfrn/react-ts-portfolio"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </Section>
      </Page.Body>
      <slot />
    </Page>
  );
}

// export function Home2() {
//   return (
//     <Page>
//       <header className="flow | border-bottom padding-block-8">
//         <h1 className="heading-3 text-center-md">Page title</h1>
//         <p className="fs-200 text-uppercase">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
//           accusamus perferendis. Obcaecati, earum eveniet? Numquam quo debitis
//           necessitatibus excepturi ab!
//         </p>
//       </header>
//       <div className="post">
//         <h1>Post 1</h1>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quisquam
//           laboriosam nam veritatis quae tempora tempore in! Incidunt veritatis
//           sed repudiandae, molestiae cupiditate magni labore sunt numquam in
//           officia accusamus eligendi quod quibusdam itaque totam voluptate harum
//           optio laboriosam. Nostrum animi dolores, assumenda quae, repellendus
//           fugit, distinctio sint blanditiis eveniet deleniti vel. Impedit ea
//           quaerat, commodi, alias velit voluptas necessitatibus ipsa pariatur,
//           et sapiente suscipit veritatis sed dolorem nesciunt dicta. Quasi
//           pariatur, earum, voluptatibus voluptatem tempore nam omnis vitae fuga
//           et repellat consequuntur rerum eum placeat eaque ex. Iusto a, fugit
//           debitis quos sit quaerat consequatur, eveniet omnis neque in fugiat
//           dolorum, voluptatibus officia est distinctio dolore fuga delectus. Qui
//           hic repudiandae dignissimos quaerat nemo minima? Voluptatum soluta,
//           tempora aliquam maiores optio tenetur reprehenderit placeat fugit
//           numquam qui adipisci repellendus id possimus quo neque obcaecati porro
//           exercitationem! Ex adipisci dolores eaque nobis excepturi eum magni
//           doloremque earum voluptatibus nihil, soluta perferendis quae aperiam
//           vitae numquam ratione iusto esse sunt. Repudiandae quam illo ipsam
//           enim possimus, nesciunt voluptatem error laborum nisi ipsa voluptate
//           porro iusto quos incidunt a ducimus numquam consequatur voluptatibus
//           aperiam asperiores placeat? Expedita repellat quia ratione dolores
//           nihil, illo eius, error quo itaque ipsum voluptas, obcaecati
//           perferendis asperiores? Repudiandae eveniet quisquam aperiam cum.
//           Aspernatur magni earum temporibus praesentium placeat debitis
//           asperiores facere unde ullam, laboriosam nihil doloribus nostrum
//           blanditiis fuga quis iste. Omnis, aspernatur! Magnam sunt, cum
//           molestiae dolores cumque ex corporis ipsa, temporibus, tempora est ut
//           quas quisquam distinctio quidem voluptate porro expedita perspiciatis
//           magni vel aliquid exercitationem in voluptatem! Repellendus voluptates
//           nihil dignissimos minus ea qui dolores soluta amet fuga perferendis
//           autem vero laborum eveniet, velit enim distinctio natus repudiandae
//           ratione exercitationem reiciendis placeat veniam voluptatem!
//           Perspiciatis id sequi, illum similique itaque libero quo consequuntur
//           ipsa, deserunt nesciunt laudantium atque dignissimos commodi dolorum
//           impedit quibusdam in.
//         </p>
//       </div>
//       <div className="post">
//         <h1>Post 1</h1>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quisquam
//           laboriosam nam veritatis quae tempora tempore in! Incidunt veritatis
//           sed repudiandae, molestiae cupiditate magni labore sunt numquam in
//           officia accusamus eligendi quod quibusdam itaque totam voluptate harum
//           optio laboriosam. Nostrum animi dolores, assumenda quae, repellendus
//           fugit, distinctio sint blanditiis eveniet deleniti vel. Impedit ea
//           quaerat, commodi, alias velit voluptas necessitatibus ipsa pariatur,
//           et sapiente suscipit veritatis sed dolorem nesciunt dicta. Quasi
//           pariatur, earum, voluptatibus voluptatem tempore nam omnis vitae fuga
//           et repellat consequuntur rerum eum placeat eaque ex. Iusto a, fugit
//           debitis quos sit quaerat consequatur, eveniet omnis neque in fugiat
//           dolorum, voluptatibus officia est distinctio dolore fuga delectus. Qui
//           hic repudiandae dignissimos quaerat nemo minima? Voluptatum soluta,
//           tempora aliquam maiores optio tenetur reprehenderit placeat fugit
//           numquam qui adipisci repellendus id possimus quo neque obcaecati porro
//           exercitationem! Ex adipisci dolores eaque nobis excepturi eum magni
//           doloremque earum voluptatibus nihil, soluta perferendis quae aperiam
//           vitae numquam ratione iusto esse sunt. Repudiandae quam illo ipsam
//           enim possimus, nesciunt voluptatem error laborum nisi ipsa voluptate
//           porro iusto quos incidunt a ducimus numquam consequatur voluptatibus
//           aperiam asperiores placeat? Expedita repellat quia ratione dolores
//           nihil, illo eius, error quo itaque ipsum voluptas, obcaecati
//           perferendis asperiores? Repudiandae eveniet quisquam aperiam cum.
//           Aspernatur magni earum temporibus praesentium placeat debitis
//           asperiores facere unde ullam, laboriosam nihil doloribus nostrum
//           blanditiis fuga quis iste. Omnis, aspernatur! Magnam sunt, cum
//           molestiae dolores cumque ex corporis ipsa, temporibus, tempora est ut
//           quas quisquam distinctio quidem voluptate porro expedita perspiciatis
//           magni vel aliquid exercitationem in voluptatem! Repellendus voluptates
//           nihil dignissimos minus ea qui dolores soluta amet fuga perferendis
//           autem vero laborum eveniet, velit enim distinctio natus repudiandae
//           ratione exercitationem reiciendis placeat veniam voluptatem!
//           Perspiciatis id sequi, illum similique itaque libero quo consequuntur
//           ipsa, deserunt nesciunt laudantium atque dignissimos commodi dolorum
//           impedit quibusdam in.
//         </p>
//       </div>
//       <div className="post">
//         <h1>Post 1</h1>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quisquam
//           laboriosam nam veritatis quae tempora tempore in! Incidunt veritatis
//           sed repudiandae, molestiae cupiditate magni labore sunt numquam in
//           officia accusamus eligendi quod quibusdam itaque totam voluptate harum
//           optio laboriosam. Nostrum animi dolores, assumenda quae, repellendus
//           fugit, distinctio sint blanditiis eveniet deleniti vel. Impedit ea
//           quaerat, commodi, alias velit voluptas necessitatibus ipsa pariatur,
//           et sapiente suscipit veritatis sed dolorem nesciunt dicta. Quasi
//           pariatur, earum, voluptatibus voluptatem tempore nam omnis vitae fuga
//           et repellat consequuntur rerum eum placeat eaque ex. Iusto a, fugit
//           debitis quos sit quaerat consequatur, eveniet omnis neque in fugiat
//           dolorum, voluptatibus officia est distinctio dolore fuga delectus. Qui
//           hic repudiandae dignissimos quaerat nemo minima? Voluptatum soluta,
//           tempora aliquam maiores optio tenetur reprehenderit placeat fugit
//           numquam qui adipisci repellendus id possimus quo neque obcaecati porro
//           exercitationem! Ex adipisci dolores eaque nobis excepturi eum magni
//           doloremque earum voluptatibus nihil, soluta perferendis quae aperiam
//           vitae numquam ratione iusto esse sunt. Repudiandae quam illo ipsam
//           enim possimus, nesciunt voluptatem error laborum nisi ipsa voluptate
//           porro iusto quos incidunt a ducimus numquam consequatur voluptatibus
//           aperiam asperiores placeat? Expedita repellat quia ratione dolores
//           nihil, illo eius, error quo itaque ipsum voluptas, obcaecati
//           perferendis asperiores? Repudiandae eveniet quisquam aperiam cum.
//           Aspernatur magni earum temporibus praesentium placeat debitis
//           asperiores facere unde ullam, laboriosam nihil doloribus nostrum
//           blanditiis fuga quis iste. Omnis, aspernatur! Magnam sunt, cum
//           molestiae dolores cumque ex corporis ipsa, temporibus, tempora est ut
//           quas quisquam distinctio quidem voluptate porro expedita perspiciatis
//           magni vel aliquid exercitationem in voluptatem! Repellendus voluptates
//           nihil dignissimos minus ea qui dolores soluta amet fuga perferendis
//           autem vero laborum eveniet, velit enim distinctio natus repudiandae
//           ratione exercitationem reiciendis placeat veniam voluptatem!
//           Perspiciatis id sequi, illum similique itaque libero quo consequuntur
//           ipsa, deserunt nesciunt laudantium atque dignissimos commodi dolorum
//           impedit quibusdam in.
//         </p>
//       </div>
//       <div className="post">
//         <h1>Post 1</h1>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quisquam
//           laboriosam nam veritatis quae tempora tempore in! Incidunt veritatis
//           sed repudiandae, molestiae cupiditate magni labore sunt numquam in
//           officia accusamus eligendi quod quibusdam itaque totam voluptate harum
//           optio laboriosam. Nostrum animi dolores, assumenda quae, repellendus
//           fugit, distinctio sint blanditiis eveniet deleniti vel. Impedit ea
//           quaerat, commodi, alias velit voluptas necessitatibus ipsa pariatur,
//           et sapiente suscipit veritatis sed dolorem nesciunt dicta. Quasi
//           pariatur, earum, voluptatibus voluptatem tempore nam omnis vitae fuga
//           et repellat consequuntur rerum eum placeat eaque ex. Iusto a, fugit
//           debitis quos sit quaerat consequatur, eveniet omnis neque in fugiat
//           dolorum, voluptatibus officia est distinctio dolore fuga delectus. Qui
//           hic repudiandae dignissimos quaerat nemo minima? Voluptatum soluta,
//           tempora aliquam maiores optio tenetur reprehenderit placeat fugit
//           numquam qui adipisci repellendus id possimus quo neque obcaecati porro
//           exercitationem! Ex adipisci dolores eaque nobis excepturi eum magni
//           doloremque earum voluptatibus nihil, soluta perferendis quae aperiam
//           vitae numquam ratione iusto esse sunt. Repudiandae quam illo ipsam
//           enim possimus, nesciunt voluptatem error laborum nisi ipsa voluptate
//           porro iusto quos incidunt a ducimus numquam consequatur voluptatibus
//           aperiam asperiores placeat? Expedita repellat quia ratione dolores
//           nihil, illo eius, error quo itaque ipsum voluptas, obcaecati
//           perferendis asperiores? Repudiandae eveniet quisquam aperiam cum.
//           Aspernatur magni earum temporibus praesentium placeat debitis
//           asperiores facere unde ullam, laboriosam nihil doloribus nostrum
//           blanditiis fuga quis iste. Omnis, aspernatur! Magnam sunt, cum
//           molestiae dolores cumque ex corporis ipsa, temporibus, tempora est ut
//           quas quisquam distinctio quidem voluptate porro expedita perspiciatis
//           magni vel aliquid exercitationem in voluptatem! Repellendus voluptates
//           nihil dignissimos minus ea qui dolores soluta amet fuga perferendis
//           autem vero laborum eveniet, velit enim distinctio natus repudiandae
//           ratione exercitationem reiciendis placeat veniam voluptatem!
//           Perspiciatis id sequi, illum similique itaque libero quo consequuntur
//           ipsa, deserunt nesciunt laudantium atque dignissimos commodi dolorum
//           impedit quibusdam in.
//         </p>
//       </div>
//     </Page>
//   );
// }
