import { BookCardProps } from './BookCard'
import revolucaoDosBichos from '@/assets/books/RevoluçãoDosBichos.png'
import habitos from '@/assets/books/14HabitosDeDesenvolvedores.png'
import eternidade from '@/assets/books/OFimDaEternidade.png'
import algoritmos from '@/assets/books/EntendendoAlgoritmos.png'
import codigoLimpo from '@/assets/books/CodigoLimpo.png'
import habitoPoder from '@/assets/books/OPoderDoHabito.png'
import arquiteturaLimpa from '@/assets/books/ArquiteturaLimpa.png'
import hobbit from '@/assets/books/OHobbit.png'
import historias from '@/assets/books/HistoriasExtraordinarias.png'
import refactor from '@/assets/books/Refatoracao.png'
import domain from '@/assets/books/DomainDrivenDesign.png'
import viagem from '@/assets/books/ViagemAoCentroDaTerra.png'
import mochileiro from '@/assets/books/OGuiaDoMochileiro.png'
import fragmentos from '@/assets/books/FragmentosDoHorror.png'
import programador from '@/assets/books/ProgramadorPragmático.png'

export const bookCardContent: BookCardProps[] = [
  {
    title: 'A revolução dos bichos',
    author: 'George Orwell',
    coverImg: revolucaoDosBichos,
    category: 'Ficção cientifífica',
  },
  {
    title: '14 Habitos de Desenvolvedores Altamente Produtivos',
    author: 'Zeno Rocha',
    coverImg: habitos,
    category: 'Educação',
  },
  {
    title: 'O fim da eternidade',
    author: 'Isaac Asimov',
    coverImg: eternidade,
    category: 'Suspense',
  },
  {
    title: 'Entendendo algoritmos',
    author: 'Aditya Y. Bhargava',
    coverImg: algoritmos,
    category: 'Computação',
  },
  {
    title: 'Código Limpo',
    author: 'Robert C. Martin',
    coverImg: codigoLimpo,
    category: 'Computação',
  },
  {
    title: 'O poder do hábito',
    author: 'Charles Duhigg',
    coverImg: habitoPoder,
    category: 'Educação',
  },
  {
    title: 'Arquitetura Limpa',
    author: 'Robert C. Martin',
    coverImg: arquiteturaLimpa,
    category: 'Computação',
  },
  {
    title: 'O Hobbit',
    author: 'J.R.R Tolkien',
    coverImg: hobbit,
    category: 'Fantasia',
  },
  {
    title: 'Histórias extraordinárias',
    author: 'Edgar Allan Poe',
    coverImg: historias,
    category: 'Suspense',
  },
  {
    title: 'Refatoração',
    author: 'Martin Fowler',
    coverImg: refactor,
    category: 'Computação',
  },
  {
    title: 'Domain-Driven Design',
    author: 'Eric Evans',
    coverImg: domain,
    category: 'Computação',
  },
  {
    title: 'Viagem ao Centro da Terra',
    author: 'Julio Verne',
    coverImg: viagem,
    category: 'Fantasia',
  },
  {
    title: 'O guia do mochileiro das galáxias',
    author: 'Douglas Adams',
    coverImg: mochileiro,
    category: 'Educação',
  },
  {
    title: 'Fragmentos do Horror',
    author: 'Junji Ito',
    coverImg: fragmentos,
    category: 'Horror',
  },
  {
    title: 'O programador pragmático',
    author: 'Andrew Hunt',
    coverImg: programador,
    category: 'Computação',
  },
]
