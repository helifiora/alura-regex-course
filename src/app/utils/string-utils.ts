export class StringUtils {

    public static escape(text: string): string {
        return text
            .replaceAll(/&/g, '&amp;')
            .replaceAll(/"/g, '&quot;')
            .replaceAll(/</g, '&lt;')
            .replaceAll(/>/g, '&gt;');
    }
}