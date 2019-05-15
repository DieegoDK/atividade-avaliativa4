<template>
    <tbody>
        <tr>
        <th scope="row">{{ contato.id }}</th>
            <td>{{ contato.titulo }}</td>
            <td>{{ contato.email }}</td>
            <td>{{ contato.msg }}</td>
            <td class="espacar">
            <button 
                class="btn btn-primary btn-sm mr-1" 
                title="Editar"
                @click="$emit('editar', contato)">
                    <i class="fas fa-pencil-alt"></i>
            </button>
            <button 
                class="btn btn-danger btn-sm" 
                title="Deletar"
                @click="$emit('deletar', contato)">
                    <i class="fa fa-trash"></i>
            </button>
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    props: {
        contato: {
            type: Object,
            requred: true
        }
    },
}
</script>

<style scoped>

    .espacar {
        flex: 1 1 auto;
    }

</style>

