import { ActionDefinition, ActionContext } from 'connery';
import axios from 'axios';

const actionDefinition: ActionDefinition = {
  key: 'deeplTranslate',
  name: 'DeepL Translate',
  description:
    'Translates text using DeepL API for a specified language with optional instructions. Note: user needs to explicitly mention Deepl and the target language in the request.',
  type: 'read',
  inputParameters: [
    {
      key: 'apiKey',
      name: 'DeepL API Key',
      description: 'Your DeepL API key',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'text',
      name: 'Text to Translate',
      description: 'The text you want to translate',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'targetLanguage',
      name: 'Target Language',
      description: 'The language code to translate to (e.g., EN, DE, FR)',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'instructions',
      name: 'Instructions',
      description: 'Optional instructions for processing the translated text',
      type: 'string',
      validation: {
        required: false,
      },
    },
  ],
  operation: {
    handler: handler,
  },
  outputParameters: [
    {
      key: 'translatedText',
      name: 'Translated Text',
      description: 'The translated text with optional instructions',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
};

export default actionDefinition;

export async function handler({ input }: ActionContext): Promise<{ translatedText: string }> {
  const { apiKey, text, targetLanguage, instructions } = input;

  const response = await axios.post(
    'https://api-free.deepl.com/v2/translate',
    {
      text: [text],
      target_lang: targetLanguage,
    },
    {
      headers: {
        Authorization: `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
    },
  );

  let translatedText = response.data.translations[0].text;

  if (instructions) {
    translatedText = `Instructions for the following content: ${instructions}\n\n${translatedText}`;
  }

  return {
    translatedText,
  };
}
