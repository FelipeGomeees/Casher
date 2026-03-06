<script setup lang="ts">
    import { CoreInput, CoreTextArea, CoreSelect, CoreToggle } from '@/components/core'
    import { LayoutFormSection, LayoutFormSectionGrid } from '@/components/layout'
    import { type MovimentacaoFormModel } from './movimentacao.types'

    const form = defineModel<MovimentacaoFormModel>({
        default: () => ({
            nome: '',
            valor: null,
            metodoPagamento: '',
            categoria: '',
            data: new Date().toISOString().split('T')[0],
            recorrente: false,
            observacao: '',
        })
    })

</script>

<template>
  <form>
    <LayoutFormSection label="Informações Principais">
      <LayoutFormSectionGrid>
        <CoreInput
          label="Local/Nome"
          v-model="form.nome"
        />

        <CoreInput
          label="Valor"
          type="number"
          v-model="form.valor"
        />
      </LayoutFormSectionGrid>
    </LayoutFormSection>

    <LayoutFormSection label="Classificação">
      <LayoutFormSectionGrid>
        <CoreSelect
          label="Método Pagamento"
          v-model="form.metodoPagamento"
          :options="categorias"
        />

        <CoreSelect
          label="Categoria"
          v-model="form.categoria"
          :options="categorias"
        />

        <CoreInput
          label="Data"
          type="date"
          v-model="form.data"
        />
      </LayoutFormSectionGrid>
    </LayoutFormSection>

    <LayoutFormSection label="Configurações">
      <LayoutFormSectionGrid>
        <CoreToggle
          v-model="form.recorrente"
          label="Recorrente"
        />

        <span class="form-helper-text">
          Será adicionado automaticamente todo começo de mês
        </span>

        <CoreTextArea
          class="form-full"
          label="Observação"
          v-model="form.observacao"
          :rows="3"
        />
      </LayoutFormSectionGrid>
    </LayoutFormSection>
  </form>
</template>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        gap: var(--gap-lx);
    }

    .form-helper-text {
        grid-column: span 1;
        font-size: 0.8rem;
        color: var(--color-grey-500);
    }

    @media (min-width: 768px) {
        .form-helper-text {
            grid-column: span 2;
        }
    }
</style>