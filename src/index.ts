import { FormController } from '@/controller/form-controller'
import { HighlightController } from '@/controller/highlight-controller';
import { MatchController } from '@/controller/match-controller';
import './style/style.less'

const form = document.getElementById('form') as HTMLFormElement | null
const pattern = document.getElementById('pattern') as HTMLInputElement | null;
const target = document.getElementById('target') as HTMLInputElement | null;

const result = document.getElementById('result') as HTMLInputElement | null;
const highlight = document.getElementById('highlight') as HTMLDivElement | null;

if (form && pattern && target && highlight && result) {
    const formController = new FormController({ form, pattern, target });
    const highlightController = new HighlightController(highlight);
    const matchController = new MatchController(result)
    formController.attach(matchController);
    formController.attach(highlightController);
    formController.listenSubmit();
}
