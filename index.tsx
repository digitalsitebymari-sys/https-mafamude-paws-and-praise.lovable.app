import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, CLINIC } from "@/components/Layout";
import f1 from "@/assets/foto1.jpg.asset.json";
import f2 from "@/assets/foto2.jpg.asset.json";
import f3 from "@/assets/foto3.jpg.asset.json";
import f4 from "@/assets/foto4.jpg.asset.json";
import f5 from "@/assets/foto5.jpg.asset.json";
import f6 from "@/assets/foto6.jpg.asset.json";
const hero = f4.url;
const fotos = [f1, f2, f3, f4, f5, f6].map((f) => f.url);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Veterinária de Mafamude - Dr. Eduardo Correia" },
      { name: "description", content: "Cuidados veterinários com carinho e preços justos em Vila Nova de Gaia." },
      { property: "og:title", content: "Clínica Veterinária de Mafamude" },
      { property: "og:description", content: "Cuidados veterinários com carinho e preços justos em Vila Nova de Gaia." },
    ],
  }),
  component: Index,
});

import googleReviews from "@/lib/google-reviews.json";
import rf1 from "@/assets/review-foto1.jpg.asset.json";
import rf2 from "@/assets/review-foto2.jpg.asset.json";
import rf3 from "@/assets/review-foto3.jpg.asset.json";
type Review = { name: string; when: string; text: string; photo?: string; link?: string; image?: string };
const reviews: Review[] = [
  ...googleReviews,
  { name: "Judite Madureira dos Santos", photo: "/__l5e/assets-v1/763d831f-195c-4185-91ec-78e5b66d5e01/cliente2.jpg", when: "há 5 anos", text: "Profissionais fantásticos, pessoas maravilhosas 😍 Merecem todo o sucesso, porque aqui temos a certeza de que os nossos amigos de 4 patas são muito bem tratados e não somos explorados 👍 Que Deus os abençoe abundantemente todos os dias 🙏🌟 Gratidão 💗" },
  { name: "Luísa Madureira", photo: "/__l5e/assets-v1/45c8ba54-9afc-43f5-bb58-0c5df34447d1/cliente4.jpg", when: "há 4 anos", text: "Recomendo, clínica com bons profissionais e com preços acessíveis. Aqui em casa estamos muito gratos por terem salvo o nosso menino Lucky 🙏 Bem hajam" },
  { name: "Manuela Costa", photo: "/__l5e/assets-v1/b0688037-dad4-469b-a999-7768844d6f31/cliente5.jpg", when: "há um ano", text: "Depois de ter gasto bastante tempo e dinheiro com a minha cadela devido a um problema de pele persistente, recomendaram-me a Clínica de Mafamude. Quero deixar o meu agradecimento e os meus parabéns à excelente equipa clínica, que demonstra verdadeiro amor e dedicação pelos animais.\nA minha Maggie, com apenas três semanas de tratamento, está ótima — e por apenas um terço do valor que tinha gasto noutras clínicas.\nRecomendo vivamente a Clínica de Mafamude pela competência, profissionalismo e paixão pelos animais!" },
  { name: "Susana Sá Pereira", photo: "/__l5e/assets-v1/11cd33fe-3524-44cd-ac73-e665bbc9ef3c/cliente6.jpg", when: "há 3 anos", image: rf1.url, text: "Quando vimos o trabalho a ser efectuado com amor para os nossos meninos de 4 patas, o resultado é de excelência 🙏 A dedicação e o esforço para a solução da saúde dos nossos meninos. Obrigada Dr. Eduardo e Dra. Daniela pela confiança 🙏 Convosco eles estão seguros 🙏🐾🐾🐾" },
  { name: "Cliente", when: "há um ano", text: "Não tenho palavras para agradecer o carinho, respeito e cuidado com que cuidaram da minha Milu. Despedimo-nos dela a 23/12/24. A minha Milu era uma gata muito especial, a favorita. Foram todos super cuidadosos com ela e não tenho mm palavras para agradecer! 🤍" },
  { name: "Ernestina Silva", photo: "/__l5e/assets-v1/0b5b3f6f-4571-4540-876d-6873b4e9e3ec/cliente3.jpg", when: "há 4 anos", image: rf2.url, text: "Obrigada por me terem salvo, graças a vocês estou ótima e já vou para casa para a beira da minha mãe e irmãos. Vou ser sempre grata.\nPositivo: Fiabilidade" },
  { name: "Cliente", when: "há 4 anos", image: rf3.url, text: "Excelente serviço para os Animais. Das melhores clínicas e corpo clínico que conheço." },
  { name: "Diana Alves", photo: "/__l5e/assets-v1/fc7a9013-df00-4945-aca4-007f04353285/cliente1.jpg", when: "há 6 anos", text: "Salvaram a vida da minha gatinha bebé, que apanhei na rua. Ela teve que extrair um olho e em outra clínica onde fui andaram a extorquir-me dinheiro com a desculpa de que não tinha peso suficiente. Em Mafamude foram impecáveis e trataram imediatamente do caso." },
  { name: "Cliente", when: "há um ano", text: "Os meus gatinhos são sempre muito bem recebidos. Confio nos excelentes profissionais desta clínica. Os administrativos são também muito simpáticos e disponíveis." },
  { name: "Cliente", when: "há 4 meses", text: "Levei minha gata pra castra e adorei o atendimento… Obrigada por cuidar da minha pet." },
  { name: "Cliente", when: "há um ano", text: "Gostei muito do atendimento, eles tem uma ótima estrutura, logo fizeram um exame e diagnósticaram o que minha cachorrinha tinha, também deram o medicamento na hora e o de levar para casa. Atendimento completo, gostei demais! A veterinária foi ótima com a minha cachorrinha!" },
  { name: "Cliente", when: "há 4 anos", text: "Todos funcionários são excelentes com o meu gatinho Luke, só elogios 😻" },
  { name: "Amigos do Coração ❤️", when: "há 3 anos", text: "Quem sempre tratou os meus animais como filhos, estará sempre no meu coração. Sabedoria, sensibilidade, disponibilidade e amizade. Obrigado por existirem e cuidarem dos nossos pets, fazendo a vossa magia! Uma vez mais, hoje fizeram renascer o meu coração com o vosso Amor! Em Honra do Kiko e por todos estes anos desde que nasceu! 🙏 Um grande abraço e beijinho a toda a família! Gratidão 🙏" },
  { name: "Cliente", when: "Google", text: "Excelentes profissionais, desde os médicos veterinários até aos colaboradores! Cuidadosos, profissionais e de uma extrema dedicação pelos animais e por todo o trabalho que desempenham. Gratidão, em meu nome e dos meus mais fiéis amigos!" },
];

function Index() {
  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-pink px-4 py-1 text-sm font-semibold text-pink-foreground">🐶 Vila Nova de Gaia 🐱</span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
              {CLINIC.name}
            </h1>
            <p className="mt-3 font-display text-2xl text-primary">{CLINIC.doctor}</p>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Cuidamos dos seus companheiros de quatro patas como se fossem da nossa família — com dedicação, paciência e preços justos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${CLINIC.phone}`} className="rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground shadow-warm transition hover:-translate-y-0.5">📞 {CLINIC.phoneDisplay}</a>
              <Link to="/contactos" className="rounded-full border-2 border-brown px-7 py-3 font-bold text-foreground transition hover:bg-secondary">Como chegar</Link>
            </div>
            <p className="mt-4 font-bold text-foreground">⭐ 4,8 no Google Maps</p>
            <p className="mt-2 text-sm text-muted-foreground">📍 {CLINIC.street}, {CLINIC.city}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-pink" />
            <img src={hero} alt="Clínica Veterinária de Mafamude" className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-warm" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center font-display text-4xl text-foreground">A nossa clínica</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">Um espaço acolhedor, pensado para o bem-estar dos animais e dos seus donos.</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {fotos.map((src, i) => (
            <img key={i} src={src} alt="Fotografia da clínica" loading="lazy" className="aspect-square w-full rounded-3xl object-cover shadow-warm transition hover:scale-[1.02]" />
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-display text-4xl text-foreground">O que dizem os clientes</h2>
          <div className="mx-auto mt-5 flex w-fit items-center gap-4 rounded-full bg-card px-7 py-3 shadow-warm">
            <span className="font-display text-4xl text-primary">4,8</span>
            <span><span className="text-xl text-primary">★★★★★</span><br /><span className="text-sm text-muted-foreground">Avaliação no Google Maps · mais de 1000 avaliações</span></span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.text} className="rounded-3xl bg-card p-8 shadow-warm">
                <p className="text-primary">★★★★★</p>
                <blockquote className="mt-3 whitespace-pre-line leading-relaxed text-card-foreground">“{r.text}”</blockquote>
                {r.image && <img src={r.image} alt="Foto da avaliação" loading="lazy" className="mt-5 aspect-[4/3] w-full rounded-2xl object-cover" />}
                <figcaption className="mt-5 flex items-center gap-3">
                  {r.photo ? (
                    <img src={r.photo} alt={r.name} loading="lazy" referrerPolicy="no-referrer" className="h-12 w-12 rounded-full object-cover ring-2 ring-pink" />
                  ) : (
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-pink font-bold text-pink-foreground">{r.name[0]}</span>
                  )}
                  <span>{r.link ? <a href={r.link} target="_blank" rel="noreferrer" className="font-bold text-foreground hover:text-primary">{r.name}</a> : <b className="text-foreground">{r.name}</b>}<br /><span className="text-sm text-muted-foreground">{r.when}</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="https://www.google.com/maps/place/?q=place_id:ChIJuX_odMxkJA0R9NwvfWLRhF4" target="_blank" rel="noreferrer" className="inline-block rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground shadow-warm transition hover:-translate-y-0.5">Ver mais de 1000 avaliações no Google Maps →</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
