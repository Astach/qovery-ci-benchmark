# Case F — large artifact push.
# A deliberately heavy final layer (~2.5 GB) to isolate registry bandwidth and
# layer compression from compile time. Nothing here is compiled.
FROM python:3.12-slim
RUN pip install --no-cache-dir torch --index-url https://download.pytorch.org/whl/cpu
CMD ["sh", "-c", "python -c 'import torch; print(torch.__version__)' && sleep infinity"]
