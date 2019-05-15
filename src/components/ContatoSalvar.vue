<template>
    <div class="mt-4">
        <hr>
        <form @submit.prevent="salvar">
            <div class="row">
                <div :class="classeColuna">
                    <div class="form-group">
                        <label>Título</label>
                        <input 
                            type="text"
                            class="form-control" 
                            placeholder="Título do contato"
                            v-model="contatoLocal.titulo">
                        <label>Email</label>
                        <input 
                            type="email"
                            class="form-control" 
                            placeholder="Email"
                            v-model="contatoLocal.email">
                        <label>Mensagem</label>
                        <input 
                            type="text"
                            class="form-control" 
                            placeholder="Mensagem..."
                            v-model="contatoLocal.msg">
                    </div>
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
        <hr>
    </div>
</template>

<script>
export default {
    props: {
        contato: {
            type: Object,
            default: undefined
        }
    },
    data() {
        return {
            contatoLocal: Object.assign(
                {}, 
                { titulo: '', email: '', msg: ''}, 
                this.contato)
        }
    },
    computed: {
        classeColuna() {
            return this.contato 
                ? 'col-sm-12'
                : 'col-sm-12'
        }
    },
    watch: {
        contato(contatoNovo, contatoAntigo) {
            this.contatoLocal = Object.assign({}, this.contato)
        }
    },
    methods: {
        salvar(event) {
            const operacao = !this.contato ? 'criar' : 'editar'
            this.$emit(operacao, this.contatoLocal)
            this.contatoLocal = { titulo: '', email: '', msg: ''}
        }
    }
}
</script>

