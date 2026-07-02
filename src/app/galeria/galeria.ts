import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [],
  template: `
    <h1>{{ titulo() }}</h1>
    <h1>Hola Mundo</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vero reiciendis perspiciatis
      atque repellat minima, quam nobis ipsam laboriosam illum tempore accusantium magni repellendus
      modi porro? Quas molestias facilis eligendi? Temporibus eum commodi pariatur veritatis eaque,
      maiores nostrum vero necessitatibus cumque facilis vel est numquam mollitia soluta molestiae
      quibusdam deserunt laboriosam dolorem illum laborum non rerum repellat voluptatum beatae.
      Reiciendis. Ipsam dolores, minus ullam recusandae explicabo consectetur velit. Dignissimos,
      saepe sequi officia sapiente incidunt quo dolore? Exercitationem enim neque obcaecati culpa
      incidunt magni nisi at qui mollitia, atque consectetur expedita. Natus esse repellendus ut
      voluptas quis. Est harum ad ipsum minima ducimus, inventore sequi facilis voluptates, eum
      fugiat autem quaerat excepturi labore repudiandae? Cumque reprehenderit cupiditate, ut iure
      minima quae. Omnis cumque, aspernatur sed cum natus nisi quae laborum. Velit minima, odit ad
      error vitae hic esse libero molestiae consectetur delectus, officia distinctio dignissimos
      facere? Libero mollitia labore facere illum! Voluptatem reprehenderit illum at exercitationem
      neque rem quis voluptas tempora explicabo quidem, veritatis nulla voluptate quasi veniam
      delectus fuga alias commodi, ut dolores. Praesentium dolores dolor dolore officiis molestias
      numquam. Natus optio harum perspiciatis, maiores totam quam reprehenderit culpa possimus,
      vitae inventore at? Corrupti soluta error quo mollitia quas voluptatem et at, consectetur
      ullam, reiciendis, omnis dolore voluptate deleniti obcaecati. Alias provident illo placeat
      vero saepe pariatur laboriosam error numquam voluptas sit possimus corrupti cupiditate
      assumenda quo quia reprehenderit, nemo amet, tenetur omnis vitae optio. Sunt beatae porro in
      totam? Illum velit aspernatur dolor alias laborum soluta qui, sit consequatur necessitatibus
      rem, culpa explicabo placeat vel nostrum praesentium rerum tenetur voluptatum veritatis
      assumenda veniam. A aut excepturi accusantium reiciendis deleniti. Laboriosam, consequatur
      atque dicta reprehenderit et commodi odit, temporibus nam doloribus inventore beatae quibusdam
      laudantium quia maxime ipsam eos quod rerum natus esse unde reiciendis? Eius expedita tempora
      voluptates nostrum!
    </p>
  `,
  styles: `
    h1 {
      color: #00f;
      background-color: #0f0;
    }
  `,
})
export class Galeria {
  titulo = signal("Hola")
}
