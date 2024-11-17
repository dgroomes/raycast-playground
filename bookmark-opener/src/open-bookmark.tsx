import { List, ActionPanel, Action, Icon } from "@raycast/api";

import bookmarks from "./bookmarks.json";

export default function OpenBookmark() {
  return (
    <List>
      {bookmarks.map((bookmark) => (
        <List.Item
          key={bookmark.url}
          title={bookmark.title}
          icon={Icon.Bookmark}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={bookmark.url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
