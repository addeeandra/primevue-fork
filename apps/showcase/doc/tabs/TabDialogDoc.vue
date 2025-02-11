<template>
    <DocSectionText v-bind="$attrs">
        <p>
            A navigation menu implemented within a Dialog.
        </p>
    </DocSectionText>
    <div class="card">
        <Dialog v-model:visible="showDialog">
            <Tabs value="/products">
                <TabList>
                    <Tab v-for="tab in items" :key="tab.label" :value="tab.route" as="div" class="flex items-center gap-2">
                        <i :class="tab.icon" />
                        <span>{{ tab.label }}</span>
                    </Tab>
                </TabList>
            </Tabs>
        </Dialog>
        <div class="flex items-center justify-center">
            <Button @click="showDialog = true" label="Show Dialog"/>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            showDialog: false,
            items: [
                { route: '/dashboard', label: 'Dashboard', icon: 'pi pi-home' },
                { route: '/transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
                { route: '/products', label: 'Products', icon: 'pi pi-list' },
                { route: '/messages', label: 'Messages', icon: 'pi pi-inbox' }
            ],
            code: {
                basic: `
<Tabs value="/dashboard">
    <TabList>
        <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
            <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                <a v-ripple :href="href" @click="navigate" class="flex items-center gap-2 text-inherit">
                    <i :class="tab.icon" />
                    <span>{{ tab.label }}</span>
                </a>
            </router-link>
        </Tab>
    </TabList>
</Tabs>
`,
                options: `
<template>
    <div class="card">
        <Tabs value="/dashboard">
            <TabList>
                <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
                    <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                        <a v-ripple :href="href" @click="navigate" class="flex items-center gap-2 text-inherit">
                            <i :class="tab.icon" />
                            <span>{{ tab.label }}</span>
                        </a>
                    </router-link>
                </Tab>
            </TabList>
        </Tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { route: '/dashboard', label: 'Dashboard', icon: 'pi pi-home' },
                { route: '/transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
                { route: '/products', label: 'Products', icon: 'pi pi-list' },
                { route: '/messages', label: 'Messages', icon: 'pi pi-inbox' }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Tabs value="/dashboard">
            <TabList>
                <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
                    <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                        <a v-ripple :href="href" @click="navigate" class="flex items-center gap-2 text-inherit">
                            <i :class="tab.icon" />
                            <span>{{ tab.label }}</span>
                        </a>
                    </router-link>
                </Tab>
            </TabList>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { route: '/dashboard', label: 'Dashboard', icon: 'pi pi-home' },
    { route: '/transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
    { route: '/products', label: 'Products', icon: 'pi pi-list' },
    { route: '/messages', label: 'Messages', icon: 'pi pi-inbox' }
]);
<\/script>
`
            }
        };
    }
};
</script>
