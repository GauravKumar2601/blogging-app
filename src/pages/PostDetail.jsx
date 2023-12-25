import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/thumbnail.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor />
          <div className="post-detail_buttons">
            <Link to={`/posts/jfdhj/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/jfdhj/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This the post title</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facilis
          necessitatibus officiis odit ducimus tempora architecto perferendis
          porro beatae est iusto voluptates ratione numquam at amet, harum
          consequuntur tempore molestiae animi mollitia eius dolore accusamus
          magni nemo. Ab, quis beatae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugit in
          architecto? Dolorum suscipit impedit sit. Numquam ipsam consequatur
          nostrum placeat sunt at, architecto dolorum repudiandae neque eos in
          sint, voluptate laboriosam ducimus! Adipisci eligendi voluptatem vel?
          Nulla repellendus dolores minima dolorum laborum esse eligendi
          consequuntur aut iusto, non dolor mollitia nostrum, illum error
          exercitationem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          deserunt libero unde nulla dolores exercitationem iure error quasi
          earum sed fuga aliquam vero quis repellat veritatis culpa, nostrum
          perspiciatis minus sint! Sint excepturi hic dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          unde impedit odio, optio repellat necessitatibus porro quas sed
          reiciendis inventore enim nobis mollitia doloribus sequi ad ea saepe
          molestiae repellendus omnis. Saepe sed ratione ad quo praesentium,
          inventore possimus repudiandae reprehenderit exercitationem ex? Magni
          sit sint eos enim inventore ut beatae aliquid saepe dolore minima
          perferendis quo, tempora quas minus magnam numquam architecto at
          molestiae eius ipsum deleniti cumque dolores? Iste sapiente itaque
          quaerat et exercitationem corporis earum velit? Doloremque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          optio quas blanditiis cumque quia, natus aliquid fugiat omnis dicta
          reiciendis facilis sed nihil, commodi illo nisi perferendis aut in
          molestias. Quisquam sapiente quo corrupti possimus est commodi rem
          perferendis soluta eum facilis recusandae voluptatum velit magnam
          obcaecati molestias officiis voluptate sint quibusdam, ea, saepe sit
          laudantium. Veritatis beatae aut laboriosam? Ex facilis voluptates
          consectetur nemo iste, voluptatem impedit quas commodi atque esse
          ullam dolorem similique excepturi accusamus nam molestiae beatae earum
          neque eligendi suscipit quidem nesciunt? Voluptatibus, nulla iusto
          deleniti ullam pariatur vero voluptatem expedita, reprehenderit
          dolores, sequi eius sint. Autem modi, ipsa voluptatibus libero nobis
          esse! Ab laudantium ipsa vitae deserunt assumenda! Ullam dolores fuga
          quos nobis ipsa officia iure doloremque accusantium, ipsam, quas nihil
          odit repellendus. Harum doloremque placeat tempore accusantium
          incidunt eum officiis expedita hic saepe ex voluptates libero nulla
          nostrum consequatur, neque nemo velit nesciunt. Aperiam, neque sunt
          vitae magnam omnis corrupti ipsa ipsam! Vero sint at magni, laborum
          debitis illum doloribus sapiente! Cumque fuga accusantium nihil
          asperiores culpa illo commodi totam quos quisquam natus excepturi
          officia, eveniet sint blanditiis dicta alias architecto impedit
          aperiam reprehenderit corporis ea numquam dolores. Perspiciatis
          sapiente debitis quisquam fugiat dolorem?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
