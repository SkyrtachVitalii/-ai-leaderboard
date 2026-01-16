// src/data/leaderboardData.ts

export interface LeaderboardEntry {
  trend: "up" | "down" | "stable";
  modelName: string;
  average: number;
  arc: number;
  hellaSwag: number;
  mmlu: number;
  truthfulQa: number;
  winogrande: number;
  gsm8k: number;
  usage: string;
}

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  { "trend": "stable", "modelName": "davidkim205/Rhea-72b-v0.5", "average": 81.22, "arc": 79.78, "hellaSwag": 91.15, "mmlu": 77.95, "truthfulQa": 74.50, "winogrande": 87.85, "gsm8k": 76.12, "usage": "1,384,193" },
  { "trend": "up", "modelName": "MTSAIR/MultiVerse_70B", "average": 81.00, "arc": 78.67, "hellaSwag": 89.77, "mmlu": 78.22, "truthfulQa": 75.18, "winogrande": 87.53, "gsm8k": 76.65, "usage": "1,319,156" },
  { "trend": "stable", "modelName": "SF-Foundation/Ein-72B-v0.11", "average": 80.81, "arc": 76.79, "hellaSwag": 89.02, "mmlu": 77.20, "truthfulQa": 79.02, "winogrande": 84.06, "gsm8k": 78.77, "usage": "1,298,529" },
  { "trend": "up", "modelName": "abacusai/Smaug-72B-v0.1", "average": 80.48, "arc": 76.02, "hellaSwag": 89.27, "mmlu": 77.15, "truthfulQa": 76.67, "winogrande": 85.08, "gsm8k": 78.70, "usage": "1,255,720" },
  { "trend": "down", "modelName": "ibivibiv/alpaca-dragon-72b-v1", "average": 79.30, "arc": 73.89, "hellaSwag": 88.16, "mmlu": 77.40, "truthfulQa": 72.69, "winogrande": 86.03, "gsm8k": 77.63, "usage": "1,239,060" },
  { "trend": "stable", "modelName": "mistralai/Mixtral-8x22B-Instruct-v0.1", "average": 79.15, "arc": 72.70, "hellaSwag": 89.08, "mmlu": 77.77, "truthfulQa": 68.14, "winogrande": 85.16, "gsm8k": 82.03, "usage": "1,208,482" },
  { "trend": "up", "modelName": "moreh/MoMo-72B-lora-1.8.7-DPO", "average": 78.55, "arc": 70.82, "hellaSwag": 85.96, "mmlu": 77.13, "truthfulQa": 74.71, "winogrande": 84.06, "gsm8k": 78.62, "usage": "1,205,577" },
  { "trend": "up", "modelName": "cloudyu/TomGrc_FusionNet_34Bx2_MoE", "average": 77.91, "arc": 74.06, "hellaSwag": 86.74, "mmlu": 76.65, "truthfulQa": 72.24, "winogrande": 83.35, "gsm8k": 74.45, "usage": "1,199,621" },
  { "trend": "down", "modelName": "meta-llama/Meta-Llama-3-70B-Instruct", "average": 77.88, "arc": 71.42, "hellaSwag": 85.69, "mmlu": 80.06, "truthfulQa": 61.81, "winogrande": 82.87, "gsm8k": 85.44, "usage": "1,190,580" },
  { "trend": "stable", "modelName": "saltlux/luxia-21.4b-alignment-v1.0", "average": 77.74, "arc": 77.47, "hellaSwag": 91.88, "mmlu": 68.10, "truthfulQa": 79.17, "winogrande": 87.37, "gsm8k": 71.11, "usage": "1,185,234" },
  { "trend": "up", "modelName": "zhengr/MixTAO-7Bx2-MoE-v8.1", "average": 77.50, "arc": 73.81, "hellaSwag": 89.22, "mmlu": 64.92, "truthfulQa": 78.57, "winogrande": 87.37, "gsm8k": 71.11, "usage": "1,178,889" },
  { "trend": "down", "modelName": "yunconglong/Truthful_DPO_TomGrc", "average": 77.44, "arc": 74.91, "hellaSwag": 89.30, "mmlu": 64.67, "truthfulQa": 78.02, "winogrande": 88.24, "gsm8k": 69.52, "usage": "1,177,065" },
  { "trend": "up", "modelName": "Qwen/Qwen1.5-72B-Chat", "average": 77.12, "arc": 74.15, "hellaSwag": 88.50, "mmlu": 76.80, "truthfulQa": 71.90, "winogrande": 84.20, "gsm8k": 77.15, "usage": "1,150,432" },
  { "trend": "up", "modelName": "01-ai/Yi-34B-Chat-v2", "average": 76.95, "arc": 73.40, "hellaSwag": 87.10, "mmlu": 75.90, "truthfulQa": 73.50, "winogrande": 83.90, "gsm8k": 77.90, "usage": "1,142,890" },
  { "trend": "stable", "modelName": "microsoft/WizardLM-2-8x22B", "average": 76.80, "arc": 72.90, "hellaSwag": 88.00, "mmlu": 76.50, "truthfulQa": 70.10, "winogrande": 84.50, "gsm8k": 78.80, "usage": "1,135,200" },
  { "trend": "down", "modelName": "databricks/dbrx-instruct", "average": 76.55, "arc": 71.80, "hellaSwag": 86.50, "mmlu": 75.20, "truthfulQa": 72.80, "winogrande": 82.10, "gsm8k": 80.90, "usage": "1,120,550" },
  { "trend": "stable", "modelName": "cognitivecomputations/dolphin-2.9-mixtral-8x22b", "average": 76.30, "arc": 73.10, "hellaSwag": 87.80, "mmlu": 74.90, "truthfulQa": 71.20, "winogrande": 83.50, "gsm8k": 77.30, "usage": "1,105,800" },
  { "trend": "stable", "modelName": "CohereForAI/c4ai-command-r-plus", "average": 76.05, "arc": 70.50, "hellaSwag": 85.20, "mmlu": 76.10, "truthfulQa": 74.80, "winogrande": 81.90, "gsm8k": 77.80, "usage": "1,098,220" },
  { "trend": "up", "modelName": "mistralai/Mistral-Large-Instruct-Latest", "average": 75.88, "arc": 71.20, "hellaSwag": 86.10, "mmlu": 77.50, "truthfulQa": 69.80, "winogrande": 82.50, "gsm8k": 78.20, "usage": "1,085,450" },
  { "trend": "down", "modelName": "meta-llama/Llama-3-8B-Instruct", "average": 75.60, "arc": 68.90, "hellaSwag": 83.40, "mmlu": 72.50, "truthfulQa": 76.20, "winogrande": 80.10, "gsm8k": 82.50, "usage": "1,072,100" },
  { "trend": "stable", "modelName": "NousResearch/Hermes-2-Pro-Llama-3-8B", "average": 75.35, "arc": 69.50, "hellaSwag": 84.10, "mmlu": 71.80, "truthfulQa": 75.50, "winogrande": 80.80, "gsm8k": 80.40, "usage": "1,065,330" },
  { "trend": "up", "modelName": "deepseek-ai/deepseek-llm-67b-chat", "average": 75.10, "arc": 72.40, "hellaSwag": 86.80, "mmlu": 74.20, "truthfulQa": 68.90, "winogrande": 83.10, "gsm8k": 75.20, "usage": "1,050,900" },
  { "trend": "down", "modelName": "Nexusflow/Starling-LM-7B-beta", "average": 74.85, "arc": 68.20, "hellaSwag": 82.90, "mmlu": 73.10, "truthfulQa": 77.50, "winogrande": 79.80, "gsm8k": 77.60, "usage": "1,040,150" },
  { "trend": "stable", "modelName": "upstage/SOLAR-10.7B-Instruct-v1.0", "average": 74.60, "arc": 70.10, "hellaSwag": 85.50, "mmlu": 72.40, "truthfulQa": 71.80, "winogrande": 82.20, "gsm8k": 75.60, "usage": "1,025,800" },
  { "trend": "down", "modelName": "openchat/openchat_3.5_1210", "average": 74.30, "arc": 69.80, "hellaSwag": 84.20, "mmlu": 71.50, "truthfulQa": 73.20, "winogrande": 81.50, "gsm8k": 75.60, "usage": "1,012,400" },
  { "trend": "up", "modelName": "berkeley-nest/Starling-LM-7B-alpha", "average": 74.05, "arc": 67.50, "hellaSwag": 81.80, "mmlu": 72.10, "truthfulQa": 78.20, "winogrande": 78.90, "gsm8k": 75.80, "usage": "1,005,600" },
  { "trend": "down", "modelName": "Teknium/OpenHermes-2.5-Mistral-7B", "average": 73.80, "arc": 68.10, "hellaSwag": 82.50, "mmlu": 71.20, "truthfulQa": 74.50, "winogrande": 79.50, "gsm8k": 77.00, "usage": "998,250" },
  { "trend": "stable", "modelName": "lmsys/vicuna-33b-v1.3", "average": 73.50, "arc": 69.20, "hellaSwag": 84.80, "mmlu": 70.50, "truthfulQa": 69.80, "winogrande": 81.20, "gsm8k": 75.50, "usage": "985,100" },
  { "trend": "up", "modelName": "TII/falcon-180B-chat", "average": 73.20, "arc": 70.50, "hellaSwag": 85.20, "mmlu": 72.80, "truthfulQa": 65.40, "winogrande": 82.50, "gsm8k": 72.80, "usage": "972,400" },
  { "trend": "stable", "modelName": "Xwin-LM/Xwin-LM-70B-V0.1", "average": 72.95, "arc": 71.20, "hellaSwag": 86.50, "mmlu": 73.50, "truthfulQa": 62.50, "winogrande": 83.80, "gsm8k": 70.20, "usage": "960,800" },
  { "trend": "down", "modelName": "garage-bAInd/Platypus2-70B-instruct", "average": 72.60, "arc": 69.80, "hellaSwag": 85.10, "mmlu": 71.20, "truthfulQa": 64.80, "winogrande": 82.10, "gsm8k": 72.60, "usage": "945,300" },
  { "trend": "up", "modelName": "stabilityai/StableBeluga2", "average": 72.30, "arc": 68.50, "hellaSwag": 84.20, "mmlu": 70.80, "truthfulQa": 66.50, "winogrande": 81.50, "gsm8k": 72.30, "usage": "932,150" },
  { "trend": "up", "modelName": "meta-llama/Llama-2-70b-chat-hf", "average": 71.90, "arc": 67.20, "hellaSwag": 83.50, "mmlu": 69.50, "truthfulQa": 64.20, "winogrande": 80.80, "gsm8k": 76.20, "usage": "915,800" },
  { "trend": "stable", "modelName": "timdettmers/guanaco-65b", "average": 71.50, "arc": 66.80, "hellaSwag": 82.10, "mmlu": 68.20, "truthfulQa": 65.50, "winogrande": 79.50, "gsm8k": 76.90, "usage": "902,400" },
  { "trend": "down", "modelName": "mosaicml/mpt-30b-chat", "average": 71.10, "arc": 65.50, "hellaSwag": 81.20, "mmlu": 67.80, "truthfulQa": 66.20, "winogrande": 78.90, "gsm8k": 77.00, "usage": "885,200" },
  { "trend": "up", "modelName": "bigcode/starcoder2-15b", "average": 70.75, "arc": 64.20, "hellaSwag": 79.50, "mmlu": 66.50, "truthfulQa": 68.80, "winogrande": 77.50, "gsm8k": 78.00, "usage": "870,550" }
];