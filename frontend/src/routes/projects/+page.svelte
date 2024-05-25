<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
	import { getClients } from '$lib/stores/clientsStore.svelte';

  let clients = getClients();
</script>

<Card.Root class="w-[350px]">
  <Card.Header>
    <Card.Title>Create project</Card.Title>
    <Card.Description>Create your new project</Card.Description>
  </Card.Header>
  <Card.Content>
    <form>
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="name">Name</Label>
          <Input id="name" placeholder="Name of your project" autoComplete="off" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="framework">Client</Label>
          <Select.Root>
            <Select.Trigger id="client">
              <Select.Value placeholder="Select" />
            </Select.Trigger>
            <Select.Content>
              {#each clients as client}
                <Select.Item value={client.id} label={client.name ?? 'Unnamed Client'}>
                  {client.name}
                </Select.Item>
              {/each}
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </form>
  </Card.Content>
  <Card.Footer class="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </Card.Footer>
</Card.Root>
