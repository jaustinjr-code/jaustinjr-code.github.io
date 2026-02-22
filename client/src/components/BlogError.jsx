import { Typography, Link } from "@mui/material";
import {
  BlogErrorTitle,
  BlogRedirectDescription,
  BlogRedirectName,
  MediumLink,
} from "@resources/strings";

export function BlogError() {
  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        {BlogErrorTitle}
      </Typography>
      <Typography variant="subtitle1">
        {BlogRedirectDescription}
        <Link href={MediumLink} color="inherit">
          {BlogRedirectName}
        </Link>
      </Typography>
    </>
  );
}

export default BlogError;
