export function DemoBanner() {
  return (
    <div className="border-4 border-red-500 bg-background p-4 mb-8">
      <div className="font-mono text-sm font-bold uppercase text-red-500 mb-2">
        ДЕМО РЕЖИМ
      </div>
      <p className="font-mono text-sm text-foreground mb-2">
        Это демонстрационные данные. Для отображения реальных видео с YouTube добавьте переменную окружения YOUTUBE_API_KEY.
      </p>
      <p className="font-mono text-xs text-muted-foreground">
        Получите API ключ в Google Cloud Console и добавьте его в настройки проекта.
      </p>
    </div>
  );
}
