import { PluginDefinition, setupPluginServer } from 'connery';
import deeplTranslate from './actions/deeplTranslate.js';

const pluginDefinition: PluginDefinition = {
  name: 'DeepL',
  description: 'Connery plugin to use DeepL translation service',
  actions: [deeplTranslate],
};

const handler = await setupPluginServer(pluginDefinition);
export default handler;
