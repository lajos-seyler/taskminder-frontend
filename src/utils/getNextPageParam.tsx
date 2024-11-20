interface LastPage {
  next: string | null;
}

export function getNextPageParam(lastPage: LastPage) {
  const nextUrl = lastPage.next;
  if (nextUrl !== null) {
    const parsedUrl = new URL(nextUrl);
    const page = parsedUrl.searchParams.get("page")!;
    const pageNumber = parseInt(page, 10);
    return pageNumber;
  }
  return null;
}
