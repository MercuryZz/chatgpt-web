import type { PlatformConfig } from './type'
export const modelListConfig: PlatformConfig[] = [
  {
    platform: 'OpenAI',
    group: 'openai',
    logo: 'https://qn.huat.xyz/mac/202404271224342.png',
    enable: 1,
    apikey: '',
    apiKeyTitle: 'OpenAI API Key',
    apiKeyTip: '使用自己的 OpenAI Key',
    baseUrl: '',
    baseUrlTitle: '接口代理地址',
    baseUrlTip: '除默认地址外，必须包含 http(s)://',
    modelListTitle: '模型列表',
    modelListTip: '选择在会话中展示的模型，选择的模型会在模型列表中展示',
    modelList: [
      {
        label: 'gpt-3.5-turbo',
        value: 'gpt-3.5-turbo',
        selected: 1,
        group: 'openai',
      },
      {
        label: 'gpt-3.5-turbo-0125',
        value: 'gpt-3.5-turbo-0125',
        selected: 1,
        group: 'openai',
      },
      {
        label: 'gpt-3.5-turbo-1106',
        value: 'gpt-3.5-turbo-1106',
        selected: 0,
        group: 'openai',
      },
      {
        label: 'gpt-3.5-turbo-16k',
        value: 'gpt-3.5-turbo-16k',
        selected: 0,
        group: 'openai',
      },
      {
        label: 'gpt-3.5-turbo-0613',
        value: 'gpt-3.5-turbo-0613',
        selected: 0,
        group: 'openai',
      },
      {
        label: 'gpt-3.5-turbo-16k-0613',
        value: 'gpt-3.5-turbo-16k-0613',
        selected: 0,
        group: 'openai',
      },
      {
        label: 'gpt-4-turbo-preview',
        value: 'gpt-4-turbo-preview',
        selected: 0,
        group: 'openai',
      },
      {
        label: 'gpt-4-0125-preview',
        value: 'gpt-4-0125-preview',
        selected: 0,
        group: 'openai',
      },
      {
        label: 'gpt-4-vision-preview',
        value: 'gpt-4-vision-preview',
        selected: 0,
        group: 'openai',
      },

      {
        label: 'gpt-4',
        value: 'gpt-4',
        selected: 0,
        group: 'openai',
      },
      {
        label: 'gpt-4-0613',
        value: 'gpt-4-0613',
        selected: 0,
        group: 'openai',
      },
      {
        label: 'gpt-4-32k',
        value: 'gpt-4-32k',
        selected: 0,
        group: 'openai',
      },
      {
        label: 'gpt-4-32k-0613',
        value: 'gpt-4-32k-0613',
        selected: 0,
        group: 'openai',
      },
      {
        label: 'gpt-4-turbo',
        value: 'gpt-4-turbo',
        selected: 0,
        group: 'openai',
      },
    ],
  },

  {
    platform: 'Gemini',
    group: 'gemini',
    logo: 'https://qn.huat.xyz/mac/202404271453196.png',
    enable: 1,
    apikey: '',
    apiKeyTitle: 'API Key',
    apiKeyTip: '填入来自 Google 的 API Key',
    baseUrl: '',
    baseUrlTitle: '接口代理地址',
    baseUrlTip: '除默认地址外，必须包含 http(s)://',
    modelListTitle: '模型列表',
    modelListTip: '选择在会话中展示的模型，选择的模型会在模型列表中展示',
    modelList: [
      {
        label: 'gemini-pro',
        value: 'gemini-pro',
        selected: 1,
        group: 'gemini',
      },
      {
        label: 'gemini-1.0-pro-vision-latest',
        value: 'gpt-3.5-turbo-0125',
        selected: 1,
        group: 'gemini',
      },
      {
        label: 'gemini-pro-vision',
        value: 'gemini-pro-vision',
        selected: 0,
        group: 'gemini',
      },
      {
        label: 'gemini-1.0-pro-latest',
        value: 'gemini-1.0-pro-latest',
        selected: 0,
        group: 'gemini',
      },
      {
        label: 'gemini-1.5-pro-latest',
        value: 'gemini-1.5-pro-latest',
        selected: 0,
        group: 'gemini',
      },
      {
        label: 'gemini-ultra',
        value: 'gemini-ultra',
        selected: 0,
        group: 'gemini',
      },
    ],
  },
]
