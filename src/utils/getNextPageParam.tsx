interface LastPage {
  next: string | null;
}

export function getNextPageParam(lastPage: LastPage) {
  const nextUrl = lastPage.next;
  if (nextUrl !== null) {
    const parsedUrl = new URL(nextUrl);

    const limit = parsedUrl.searchParams.get("limit")!;
    const offset = parsedUrl.searchParams.get("offset")!;

    return { limit: parseInt(limit, 10), offset: parseInt(offset, 10) };
  }
  return null;
}
