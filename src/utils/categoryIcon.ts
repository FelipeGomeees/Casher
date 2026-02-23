import {
  ShoppingBagIcon,
  TruckIcon,
  HeartIcon,
  CreditCardIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  BriefcaseIcon,
  ArrowTrendingUpIcon,
  QuestionMarkCircleIcon
} from '@heroicons/vue/24/outline'

  import { type Component } from 'vue';

export type Categoria =
  | 'Alimentação'
  | 'Transporte'
  | 'Saúde'
  | 'Assinaturas'
  | 'Compras'
  | 'Salário'
  | 'Freelance'
  | 'Receita'

const categoryIconMap: Record<Categoria, Component> = {
  'Alimentação': ShoppingBagIcon,
  'Transporte': TruckIcon,
  'Saúde': HeartIcon,
  'Assinaturas': CreditCardIcon,
  'Compras': ShoppingCartIcon,
  'Salário': BanknotesIcon,
  'Freelance': BriefcaseIcon,
  'Receita': ArrowTrendingUpIcon
}

export function getCategoryIcon(categoria: Categoria): Component {
  return categoryIconMap[categoria] ?? 'QuestionMarkCircleIcon'
}