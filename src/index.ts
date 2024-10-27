import { PluginDefinition, setupPluginServer } from 'connery';
import translatetextwithdeepl from "./actions/translatetextwithdeepl.js";

const pluginDefinition: PluginDefinition = {
  name: 'Deepl',
  description: 'Connery plugin to use Deepl&#x27;s translation service',
  actions: [translatetextwithdeepl],
};

const handler = await setupPluginServer(pluginDefinition);
export default handler;
