<script lang="ts">
import { defineComponent } from 'vue';
import { useToast } from "primevue/usetoast";
import Button from "primevue/button";
import Toast from "primevue/toast";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';


export default defineComponent({
    name: 'Table',
    components: {
        Button,
        Toast,
        DataTable,
        Column,
        ColumnGroup,
        Row,
    },
    setup() {
        const toast = useToast();

        const products = [
            { code: 'P001', name: 'Product 1', category: 'Category 1', quantity: 10 },
            { code: 'P002', name: 'Product 2', category: 'Category 2', quantity: 20 },
            { code: 'P003', name: 'Product 3', category: 'Category 3', quantity: 30 },
            { code: 'P004', name: 'Product 4', category: 'Category 4', quantity: 40 },
        ];
        const showToast = () => {
            toast.add({ severity: 'contrast', summary: 'Info Message', detail: 'Table component loaded!', life: 3000 });
        };

        return {
            showToast,
            products,
        };
    },
});
</script>
<template>
    <div class="flex flex-row w-full pt-5 justify-center">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
    <Button label="Submit" @click="showToast" />
</template>